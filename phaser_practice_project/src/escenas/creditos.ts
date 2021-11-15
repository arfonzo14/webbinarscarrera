import Constantes from "../constantes";

export default class Creditos extends Phaser.Scene 
{  
    private imagenFondo: Phaser.GameObjects.TileSprite;

    constructor () {
        super(Constantes.ESCENAS.CREDITOS);        
    }
 
    
    create (): void {    
        
        this.imagenFondo = this.add.tileSprite(0,0, this.cameras.main.width, this.cameras.main.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);


        const logo: Phaser.GameObjects.Image = this.add.image(250, 100, Constantes.CREDITOS.GAMEDEV);    
        
        const realizadoTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(70, 200 , Constantes.FUENTE.BITMAP, Constantes.CREDITOS.CREADOPOR, 13).setInteractive();     
        const assetsTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(70, 280 , Constantes.FUENTE.BITMAP, Constantes.CREDITOS.ASSETS, 13).setInteractive();        
        const volverTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(70, 420 , Constantes.FUENTE.BITMAP, Constantes.CREDITOS.VOLVER, 16).setInteractive();

        volverTxt.on('pointerdown', () => {                      
            this.scene.start(Constantes.ESCENAS.MENU);            
        });



       
    }    
    
    update(): void{
        //movimiento scroll del fondo 
        this.imagenFondo.tilePositionY -= 0.4 ;

    }
}
