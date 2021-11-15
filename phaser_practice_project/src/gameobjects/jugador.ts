import Constantes from "../constantes";
import ManejadorNivel from "../escenas/manejadornivel";
import GestorBD from "../basedatos/gestorbd";

export default class Jugador extends Phaser.Physics.Arcade.Sprite {
    private escena: ManejadorNivel;
    private teclasWASD: any;
    private cursores: Phaser.Types.Input.Keyboard.CursorKeys;
    private teclaEspacio: Phaser.Input.Keyboard.Key;

    private tiempoEsperaColisionActivo: boolean;  
    private recolectando: boolean;  


    private plataformaTrasnporte: Phaser.Physics.Arcade.Sprite;
    private transportando: boolean;

    private saltarAudio: Phaser.Sound.BaseSound;
    private caerSobreAudio: Phaser.Sound.BaseSound;
    private recolectarAudio: Phaser.Sound.BaseSound;
    private vidaAudio: Phaser.Sound.BaseSound;

    //controles tactiles    
    public controlIzda : boolean;
    public controlDcha : boolean;
    public controlSalto : boolean;

    private mibd: GestorBD;

    constructor(config: any){
        super(config.escena, config.x, config.y, config.textura);        

        this.escena = config.escena;

        //Añadir el jugador a la escena en la que esta
        this.escena.physics.world.enable(this);
        this.escena.add.existing(this);

        //para que no se salga de la pantalla        
        this.setCollideWorldBounds(true); 
        this.body.setSize(20,30);

        // Control
        this.cursores = this.escena.input.keyboard.createCursorKeys();        
        this.teclasWASD = this.escena.input.keyboard.addKeys('W,A,S,D');
        this.teclaEspacio = this.escena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //Animación inicial
        this.play(Constantes.JUGADOR.ANIMACION.ESPERA);        

        //tiempo de espera para colisiones overlap
        this.tiempoEsperaColisionActivo = false;
        this.recolectando = false;

        //Sonidos                
        this.saltarAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.SALTAR);
        this.caerSobreAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.CAERSOBREENEMIGO, {volume: 1.25});
        this.recolectarAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.RECOLECTAR, {volume: 0.75});
        this.vidaAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.QUITARVIDA, {volume:0.25});

        //BD
        this.mibd = new GestorBD();

    }


    update(){       
        
        //Control movimiento Jugador        
        if (this.teclasWASD.A.isDown || this.cursores.left.isDown || this.controlIzda){
            this.setVelocityX(-200);
            if (this.body.blocked.down) this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
            this.flipX = true;
        }
        else if (this.teclasWASD.D.isDown || this.cursores.right.isDown || this.controlDcha){
            this.setVelocityX(200);
            if (this.body.blocked.down) this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
            this.flipX = false;
        }
        else{            
            this.setVelocityX(0);    
            if (this.body.blocked.down) this.anims.play(Constantes.JUGADOR.ANIMACION.ESPERA, true);            
        }
        

        if ((this.teclasWASD.W.isDown || this.teclaEspacio.isDown || this.cursores.up.isDown || this.controlSalto) && this.body.blocked.down){            
            this.setVelocityY(-300);
            this.anims.stop();
            this.setTexture(Constantes.JUGADOR.ID, Constantes.JUGADOR.ANIMACION.SALTO);
            this.reproduceAudio(this.saltarAudio);           
            
        }


    }


    /**
     * Método que maneja la colisión entre el jugador y un objeto enemigo
     * Se quita vida al jugador si enemigo tca al jugador
     * Si jugador toca al enemigo desde arriba elimina enemigo e incrementa puntos
     * El contexto this es desde dónde se llama por eso hay que usar jugador en lugar de this
     * @param jugador 
     * @param enemigo 
     */
    public enemigoToca(jugador: Jugador, enemigo: Phaser.Physics.Arcade.Sprite): void{        
        
        //Hace desaparecer al enemigo si salta sobre él
        if (jugador.body.velocity.y>100 && 
            enemigo.body.touching.up && jugador.body.touching.down ){   
                
            if (!jugador.tiempoEsperaColisionActivo){                                                                     
                jugador.reproduceAudio(jugador.caerSobreAudio);
                let posX = enemigo.x;
                let posY = enemigo.y;
                enemigo.destroy();
                
                //incrementa marcador 100puntos
                jugador.escena.puntuacion += 100;
                jugador.escena.registry.set(Constantes.REGISTRO.PUNTUACION, jugador.escena.puntuacion);
                jugador.escena.events.emit(Constantes.EVENTOS.PUNTUACION);
    
                //añade efecto explosion con una animación que cuando se completa desaparece
                let explosion: Phaser.GameObjects.Sprite = jugador.escena.add.sprite(posX, posY , Constantes.ENEMIGOS.EXPLOSION.ID);                                          
                explosion.setScale(0.75);
                explosion.play(Constantes.ENEMIGOS.EXPLOSION.ANIM);                            
                explosion.once('animationcomplete', () => {                                
                    explosion.destroy();                            
                });
            }
        }else if (!jugador.tiempoEsperaColisionActivo){   
            
            jugador.reproduceAudio(jugador.vidaAudio);

            //quita vidas y actualiza HUD
            jugador.escena.vidas--;            
            jugador.escena.registry.set(Constantes.REGISTRO.VIDAS, jugador.escena.vidas);
            jugador.escena.events.emit(Constantes.EVENTOS.VIDAS);
            
            //activa tiempoEspera ya que al ser un overlap está colisionando constantemente
            jugador.tiempoEsperaColisionActivo = true;
            //lo tiñe de rojo al jugador
            jugador.tint = 0xff9900; 

            if (jugador.escena.vidas==0) {                
                jugador.escena.finalizaNivel(false);
            }

            //añade evento de espera para volver a la normalidad
            jugador.escena.time.addEvent({
                delay: 600,
                callback: () => {
                    jugador.tiempoEsperaColisionActivo = false;
                    jugador.tint = 0xffffff; 
                }
            });

            
        }
        

    }


    public recolecta(jugador: Jugador, objeto: Phaser.Physics.Arcade.Sprite): void{   
        if (!jugador.recolectando){
            jugador.recolectando = true;
            
            //incrementa marcador 50puntos
            jugador.escena.puntuacion += 50;
            jugador.escena.registry.set(Constantes.REGISTRO.PUNTUACION, jugador.escena.puntuacion);
            jugador.escena.events.emit(Constantes.EVENTOS.PUNTUACION);

            jugador.escena.numObjetosRecolectar--;
            jugador.escena.registry.set(Constantes.REGISTRO.OBJETOSRECOLECTAR, jugador.escena.numObjetosRecolectar);
            jugador.escena.events.emit(Constantes.EVENTOS.RECOLECTAR);

            if (jugador.escena.numObjetosRecolectar==0){ 
                jugador.escena.objetofinal.setAlpha(1);                  
                jugador.escena.objetofinalColision.active = true;
            }

            jugador.reproduceAudio(jugador.recolectarAudio);

            //realiza una animación para desaparecer
            jugador.escena.tweens.add({
                targets: objeto,
                y: objeto.y - 100,
                alpha: 0,
                duration: 800,
                ease: "Cubic.easeOut",
                callbackScope: this,
                onComplete: function(){                
                    jugador.recolectando = false;
                    objeto.destroy();                                 
                }
            });
        }

    }

    reproduceAudio(audio: Phaser.Sound.BaseSound): void{        
        if (this.mibd.datos.efectos){
            audio.play();
        }
    }


}

