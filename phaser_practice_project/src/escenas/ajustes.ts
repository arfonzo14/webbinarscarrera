import Constantes from "../constantes";
import GestorBD from "../basedatos/gestorbd";

export default class Ajustes extends Phaser.Scene 
{  
    private imagenFondo: Phaser.GameObjects.TileSprite;

    constructor () {
        super(Constantes.ESCENAS.AJUSTES);        
    }
  
    
    create (): void {        
        let mibd: GestorBD = new GestorBD();

        this.imagenFondo = this.add.tileSprite(0,0, this.cameras.main.width, this.cameras.main.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);


        //Sonidos y Efectos
        const musicatxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(80, 200 , Constantes.FUENTE.BITMAP, Constantes.AJUSTES.MUSICA, 20).setInteractive();
        const efectostxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(250, 200 , Constantes.FUENTE.BITMAP, Constantes.AJUSTES.EFECTOS, 20).setInteractive();
        
        let musicaOnOff: Phaser.GameObjects.Image = this.add.image(130, 250, this.getImagenSonido(mibd.datos.musica)).setScale(0.5).setInteractive();
        let efectosOnOff: Phaser.GameObjects.Image = this.add.image(300, 250, this.getImagenSonido(mibd.datos.efectos)).setScale(0.5).setInteractive();


        musicaOnOff.on('pointerdown', () => { 
            mibd.datos.musica = !mibd.datos.musica;
            mibd.grabarBD();                        
            musicaOnOff.setTexture(this.getImagenSonido(mibd.datos.musica));
        });


        efectosOnOff.on('pointerdown', () => { 
            mibd.datos.efectos = !mibd.datos.efectos;
            mibd.grabarBD();                        
            efectosOnOff.setTexture(this.getImagenSonido(mibd.datos.efectos));
        });
        
        
        const volverTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(80, 420 , Constantes.FUENTE.BITMAP, Constantes.CREDITOS.VOLVER, 20).setInteractive();

        volverTxt.on('pointerdown', () => {                      
            this.scene.start(Constantes.ESCENAS.MENU);            
        });



       
    }    

    getImagenSonido(encendido: boolean): string{
        return (encendido)?Constantes.AJUSTES.SONIDOON : Constantes.AJUSTES.SONIDOOFF;
    }

    update(): void{
        //movimiento scroll del fondo 
        this.imagenFondo.tilePositionY -= 0.4 ;

    }

}
