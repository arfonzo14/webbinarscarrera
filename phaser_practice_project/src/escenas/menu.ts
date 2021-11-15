import Constantes from "../constantes";
import GestorBD from "../basedatos/gestorbd"

export default class Menu extends Phaser.Scene 
{  
    private imagenFondo: Phaser.GameObjects.TileSprite;

 
 
    constructor () {
        super(Constantes.ESCENAS.MENU);        
    }

     

    
    create (): void {     

        this.imagenFondo = this.add.tileSprite(0,0, this.cameras.main.width, this.cameras.main.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);

        const tituloTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(250, 25 , Constantes.FUENTE.BITMAP, Constantes.MENU.TITULO, 20);     

        const logo: Phaser.GameObjects.Image = this.add.image(400, 200, Constantes.JUGADOR.ID, Constantes.JUGADOR.ANIMACION.SALTO).setScale(8);    
        
        const jugarTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(80, 400 , Constantes.FUENTE.BITMAP, Constantes.MENU.JUGAR, 20).setInteractive();     
        this.cambiarEscena(jugarTxt, Constantes.ESCENAS.SELECCIONNIVEL);

        const ajustesTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(300, 400 , Constantes.FUENTE.BITMAP, Constantes.MENU.AJUSTES, 20).setInteractive();
        this.cambiarEscena(ajustesTxt, Constantes.ESCENAS.AJUSTES);
        
        const creditosTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(550, 400 , Constantes.FUENTE.BITMAP, Constantes.MENU.CREDITOS, 20).setInteractive();
        this.cambiarEscena(creditosTxt, Constantes.ESCENAS.CREDITOS);

       
    }    
    
    /**
     * Cuando se pulsa sobre el texto enlace se va hacia la escena indicada
     * @param texto 
     * @param nuevaEscena 
     */
    cambiarEscena(texto: Phaser.GameObjects.BitmapText, nuevaEscena : string) : void {
        texto.on('pointerdown', () => {  
            this.scene.start(nuevaEscena);                                              
        });
    }


    update(): void{
        //movimiento scroll del fondo 
        this.imagenFondo.tilePositionY -= 0.4 ;

    }
}
