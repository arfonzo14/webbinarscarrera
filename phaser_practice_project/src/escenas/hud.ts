import Constantes from '../constantes';
import ManejadorNivel from './manejadornivel';

export default class HUD extends Phaser.Scene 
{ 
    private vidasTxt : Phaser.GameObjects.BitmapText;
    private puntuacionTxt : Phaser.GameObjects.BitmapText;
    private relojTxt : Phaser.GameObjects.BitmapText; 
    private cestaImg : Phaser.GameObjects.Image;
    private recolectados : number;
    private recolectarTxt : Phaser.GameObjects.BitmapText; 
 
    private nombreNivel: string;
    private nivel: ManejadorNivel;
    //controles
    private controlIzda: Phaser.GameObjects.Sprite;
    private controlDcha: Phaser.GameObjects.Sprite;
    private controlSalto: Phaser.GameObjects.Sprite;


    constructor () {
        super(Constantes.ESCENAS.HUD);        
    }

    init(data){        
        this.nombreNivel = data.nombreNivel;
        
    }

    create (): void {      
        this.nivel = <ManejadorNivel>this.scene.get(this.nombreNivel);
 
        //detecta pantalla tactil crea controles
        if (this.sys.game.device.input.touch) {
            this.crearControles();
        }

        
        //crear eventos        
        this.nivel.events.on(Constantes.EVENTOS.VIDAS, this.actualizaVidas, this);
        this.nivel.events.on(Constantes.EVENTOS.PUNTUACION, this.actualizaPuntuacion, this);
        this.nivel.events.on(Constantes.EVENTOS.RELOJ, this.actualizaReloj, this);
        this.nivel.events.on(Constantes.EVENTOS.RECOLECTAR, this.actualizaRecolectar, this);

        this.vidasTxt = this.add.bitmapText(20, 20 , Constantes.FUENTE.BITMAP, Constantes.HUD.VIDAS + this.registry.get(Constantes.REGISTRO.VIDAS), 20);

        this.cestaImg = this.add.image(20,50, Constantes.HUD.CESTA).setOrigin(0);

        this.recolectarTxt = this.add.bitmapText(60, 55 , Constantes.FUENTE.BITMAP, this.registry.get(Constantes.REGISTRO.OBJETOSRECOLECTAR), 20);
        
        this.puntuacionTxt = this.add.bitmapText(this.cameras.main.width - 100,20, Constantes.FUENTE.BITMAP, '00000', 20);

        this.relojTxt = this.add.bitmapText(this.cameras.main.width / 2 - 100 ,20, Constantes.FUENTE.BITMAP, '05:00', 20);


    }
    private actualizaVidas(): void {
        this.vidasTxt.text = Constantes.HUD.VIDAS + this.registry.get(Constantes.REGISTRO.VIDAS);
    }

    private actualizaPuntuacion(): void {
        this.puntuacionTxt.text = Phaser.Utils.String.Pad(this.registry.get(Constantes.REGISTRO.PUNTUACION), 5, '0', 1);
    }

    private actualizaReloj(): void {
        this.relojTxt.text =  this.registry.get(Constantes.REGISTRO.RELOJ);
    }

    private actualizaRecolectar(): void {
        this.recolectarTxt.text =  this.registry.get(Constantes.REGISTRO.OBJETOSRECOLECTAR);
    }   


    private crearControles(): void {
        //Para que admita usar dos controles a la vez    
        this.input.addPointer(2);
    
        // Controles
        this.controlIzda = this.add.sprite(100, 0, Constantes.CONTROL.IZQUIERDA)
            .setInteractive();
        this.controlDcha = this.add.sprite(350, 0, Constantes.CONTROL.DERECHA)
            .setInteractive();
        this.controlSalto = this.add.sprite(1200 , 0, Constantes.CONTROL.SALTO)
            .setInteractive();
        


        // Eventos de los controles
        this.controlIzda.on('pointerdown', () => {
            this.nivel.jugador.controlIzda = true;            
        });
        this.controlIzda.on('pointerup', () => {
            this.nivel.jugador.controlIzda = false;
        });

        this.controlIzda.on('pointerout', () => {
            this.nivel.jugador.controlIzda = false;
        });

        this.controlDcha.on('pointerdown', () => {
            this.nivel.jugador.controlDcha = true;
        });
        this.controlDcha.on('pointerup', () => {
            this.nivel.jugador.controlDcha = false;
        });

        this.controlDcha.on('pointerout', () => {
            this.nivel.jugador.controlDcha = false;
        });

        this.controlSalto.on('pointerdown', () => {
            this.nivel.jugador.controlSalto = true;
        });
        this.controlSalto.on('pointerup', () => {
            this.nivel.jugador.controlSalto = false;
        });
        this.controlSalto.on('pointerout', () => {
            this.nivel.jugador.controlSalto = false;
        });

        // Posicionando los controles
        const controlContainer = this.add.container(50, 390);
        controlContainer.add([
            this.controlIzda,
            this.controlDcha,
            this.controlSalto
        ]);
        controlContainer
            .setScale(.6)
            .setAlpha(0.8)
            .setScrollFactor(0)
            .setDepth(5);
    }    
    
}