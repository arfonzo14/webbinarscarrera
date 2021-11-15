import { GameObjects } from "phaser";
import Constantes from "../constantes";

export default class Carga extends Phaser.Scene 
{
    //Barras de Carga 
    private barraCarga: Phaser.GameObjects.Graphics;
    private barraProgreso: Phaser.GameObjects.Graphics; 

 
    constructor () {
        super(Constantes.ESCENAS.CARGA); 
    }

    preload (): void {

        this.cameras.main.setBackgroundColor(0x9fcc98);
        this.creaBarras();   
           
        
        //Listener mientras se cargan los assets
        this.load.on(
            'progress',  
            (value: number) =>  {
              this.barraProgreso.clear();
              this.barraProgreso.fillStyle(0x72a11d, 1);
              this.barraProgreso.fillRect(
                this.cameras.main.width / 4,
                this.cameras.main.height / 2 - 16,
                (this.cameras.main.width / 2) * value,
                16
              );
            });

        //Listener cuando se hayan cargado todos los Assets  
        this.load.on('complete', () => {
          //carga las fuentes Pixel en la cache del juego                
          const fuenteJSON = this.cache.json.get(Constantes.FUENTE.JSON);
          this.cache.bitmapFont.add(Constantes.FUENTE.BITMAP, Phaser.GameObjects.RetroFont.Parse(this, fuenteJSON));

          //Carga la escena del juego
          this.scene.start(Constantes.ESCENAS.MENU);
        });

        
        this.cargaAssets();

                
    }

    create(): void{
      //Crea todas las posibles animaciones producidas en el nivel
      //Son globales al juego, una vez creadas no se vuelven a crear y se pueden usar en cualquier nivel
      this.anims.create({
        key: Constantes.JUGADOR.ANIMACION.ESPERA, 
        frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID,{
            prefix:Constantes.JUGADOR.ANIMACION.ESPERA + '-',
            end:10 }), 
        frameRate:20, 
        repeat: -1
      });
      this.anims.create({
          key: Constantes.JUGADOR.ANIMACION.CORRER, 
          frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID,{
              prefix:Constantes.JUGADOR.ANIMACION.CORRER + '-',
              end:11 
          }), 
          frameRate:20, 
          repeat: -1
      });
      //crea la animacion de explosion        
      this.anims.create({
          key: Constantes.ENEMIGOS.EXPLOSION.ANIM,
          frames: Constantes.ENEMIGOS.EXPLOSION.ID,
          frameRate: 15,
          repeat: 0
      });

      //Carga ajustes iniciales
      this.registry.set(Constantes.REGISTRO.MUSICA, Constantes.AJUSTES.SONIDOON);
      this.registry.set(Constantes.REGISTRO.EFECTOS, Constantes.AJUSTES.SONIDOON);

    }

    /**
     * Método que crea las barras de progreso
     */
    private creaBarras(): void {
        this.barraCarga = this.add.graphics();
        this.barraCarga.fillStyle(0xffffff, 1);
        this.barraCarga.fillRect(
          this.cameras.main.width / 4 - 2,
          this.cameras.main.height / 2 - 18,
          this.cameras.main.width / 2 + 4,
          20 
        );
        this.barraProgreso = this.add.graphics();
    }

    private cargaAssets(): void{
        
        //Carga los assets del juego                
        this.load.path = 'assets/';

        this.load.image('logo_1' , 'phaser3-logo.png');        

        //Mapas
        this.load.tilemapTiledJSON(Constantes.MAPAS.NIVEL1.TILEMAPJSON, 'niveles/nivel1.json');
        this.load.tilemapTiledJSON(Constantes.MAPAS.NIVEL2.TILEMAPJSON, 'niveles/nivel2.json');
        this.load.tilemapTiledJSON(Constantes.MAPAS.NIVEL3.TILEMAPJSON, 'niveles/nivel3.json');
        this.load.image(Constantes.MAPAS.TILESET, 'niveles/nivelestileset.png');     
        
        //Imágenes de fondo de los niveles
        this.load.image(Constantes.FONDOS.MENU, 'imagenes/fondos/Green.png');     
        this.load.image(Constantes.FONDOS.NIVEL1, 'imagenes/fondos/Brown.png');     
        this.load.image(Constantes.FONDOS.NIVEL2, 'imagenes/fondos/Pink.png');     
        this.load.image(Constantes.FONDOS.NIVEL3, 'imagenes/fondos/Blue.png'); 


        //Fuentes                
        this.load.json(Constantes.FUENTE.JSON, 'fuentes/fuente.json');
        this.load.image(Constantes.FUENTE.IMAGEN, 'fuentes/imagenFuente.png');


        //Spritesheets            
        this.load.atlas(Constantes.JUGADOR.ID, 'imagenes/jugador/ninjafrog.png', 'imagenes/jugador/ninjafrog.json');

        //Objetos
        this.load.image(Constantes.OBJETOS.FINAL, 'imagenes/objetos/final.png');     

        //Enemigos
        this.load.spritesheet(Constantes.ENEMIGOS.BUNNY.ID, 'imagenes/enemigos/bunny.png', { frameWidth: 34, frameHeight: 44 });
        this.load.spritesheet(Constantes.ENEMIGOS.CHICKEN.ID, 'imagenes/enemigos/chicken.png', { frameWidth: 32, frameHeight: 34 });
        this.load.spritesheet(Constantes.ENEMIGOS.MUSHROOM.ID, 'imagenes/enemigos/mushroom.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet(Constantes.ENEMIGOS.RADISH.ID, 'imagenes/enemigos/radish.png', { frameWidth: 30, frameHeight: 38 });

        //Explosion
        this.load.spritesheet(Constantes.ENEMIGOS.EXPLOSION.ID, 'imagenes/enemigos/explosion.png', { frameWidth: 38, frameHeight: 38 });
        
        this.load.image(Constantes.PLATAFORMAMOVIL.NIVEL1.ID, 'imagenes/objetos/platformamovil.png');
        this.load.image(Constantes.PLATAFORMAMOVIL.NIVEL2.ID, 'imagenes/objetos/platformamovil2.png');
        this.load.image(Constantes.PLATAFORMAMOVIL.NIVEL3.ID, 'imagenes/objetos/platformamovil3.png');

        //Sonidos
        this.load.audio(Constantes.SONIDOS.EFECTOS.SALTAR, 'sonidos/efectos/saltar.ogg');
        this.load.audio(Constantes.SONIDOS.EFECTOS.CAERSOBREENEMIGO, 'sonidos/efectos/caersobre.ogg');
        this.load.audio(Constantes.SONIDOS.EFECTOS.QUITARVIDA, 'sonidos/efectos/vida.ogg');        
        this.load.audio(Constantes.SONIDOS.EFECTOS.RECOLECTAR, 'sonidos/efectos/recolectar.ogg'); 
        
        //Bandas Sonoras de niveles
        for (let i=1; i<=3; i++)
            this.load.audio(Constantes.SONIDOS.BANDASONORA + 'NIVEL ' + i, `sonidos/bandasonora/cartoongame${i}.ogg`);

        //Recolectables
        this.load.spritesheet(Constantes.RECOLECTABLES.PLATANO.ID, 'imagenes/objetos/platano.png', {frameWidth:32, frameHeight:32});
        this.load.spritesheet(Constantes.RECOLECTABLES.CEREZA.ID, 'imagenes/objetos/cereza.png', {frameWidth:32, frameHeight:32});
        this.load.spritesheet(Constantes.RECOLECTABLES.PINA.ID, 'imagenes/objetos/pina.png', {frameWidth:32, frameHeight:32});
        
        //Cesta de recolección
        this.load.image(Constantes.HUD.CESTA, 'imagenes/objetos/basket.png');

        //creditos
        this.load.image(Constantes.CREDITOS.GAMEDEV, 'imagenes/objetos/sergiflags.png');  

        //ajustes
        this.load.image(Constantes.AJUSTES.SONIDOON, 'imagenes/objetos/sonidoon.png');  
        this.load.image(Constantes.AJUSTES.SONIDOOFF, 'imagenes/objetos/sonidooff.png');  

        //imagen niveles 
        for (let i=1; i<=3; i++)
          this.load.image(Constantes.ESCENAS.SELECCIONNIVEL + i, `imagenes/niveles/0${i}.png`);  

        //CONTROLES (Para pantallas tectiles)
        this.load.image('controlSalto', 'imagenes/control/controlSalto.png');        
        this.load.image('controlDcha', 'imagenes/control/controlDcha.png');
        this.load.image('controlIzda', 'imagenes/control/controlIzda.png');
    }


}