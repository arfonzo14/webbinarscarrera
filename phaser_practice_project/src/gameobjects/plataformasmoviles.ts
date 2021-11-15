import Constantes from '../constantes';
import ManejadorNivel from '../escenas/manejadornivel';

export default class PlataformasMoviles extends Phaser.Physics.Arcade.Group {
    private escena: ManejadorNivel ;
    private velocidad: number;

    private horizontal: boolean;


    constructor(escena: ManejadorNivel, nombreObjeto: string, idObjeto: string, velocidad: number, horizontal: boolean) {
    
         
        super(escena.physics.world, escena);        
        
        this.escena = escena;
        this.velocidad=velocidad;        

        this.horizontal = horizontal;

        let nombreObjetoPlataforma: string = (this.horizontal)? Constantes.MAPAS.PLATAFORMAHORIZONTAL: Constantes.MAPAS.PLATAFORMAVERTICAL;
                        
        // añade los objetos de los enemigos desde el array de sprites obtenidos del mapa al grupo        
        this.addMultiple(this.escena.mapaNivel.createFromObjects(nombreObjeto, {name: nombreObjetoPlataforma, key:idObjeto}));
                
        this.children.entries.map((enemigo: any) => {            
            enemigo.setTexture(idObjeto);
            enemigo.body.setCollideWorldBounds(true);  
            enemigo.body.setAllowGravity(false);            
            enemigo.body.setImmovable(true);            
            if (this.horizontal){
                enemigo.body.setFrictionX(1);
                enemigo.body.setVelocityX(this.velocidad);                         
                this.mueveEnemigoHorizontal((Phaser.Math.Between(0, 1) ? 'izda' : 'dcha'), enemigo);
            }else{
                enemigo.body.setFrictionY(1);
                enemigo.body.setVelocityY(this.velocidad);                         
                this.mueveEnemigoVertical((Phaser.Math.Between(0, 1) ? 'arriba' : 'abajo'), enemigo);                
            }
            
            
        });

        
        
    }

    mueveEnemigoHorizontal(direccion: string, enemigo: any): void {        
        (direccion === 'izda')? enemigo.body.setVelocityX(this.velocidad*-1):enemigo.body.setVelocityX(this.velocidad);                    
    }

    mueveEnemigoVertical(direccion: string, enemigo: any): void{        
        (direccion === 'arriba')? enemigo.body.setVelocityY(this.velocidad*-1):enemigo.body.setVelocityY(this.velocidad);            
    }

    public update(): void {        
        this.children.entries.map((enemigo: any) => {
            if (this.horizontal){
                if(enemigo.body.velocity.x === 0) {
                    this.mueveEnemigoHorizontal((Phaser.Math.Between(0, 1) ? 'izda' : 'dcha'), enemigo);
                }
                if (enemigo.body.blocked.right) {
                    this.mueveEnemigoHorizontal('izda', enemigo);                              
                } else if (enemigo.body.blocked.left) {
                    this.mueveEnemigoHorizontal('dcha', enemigo);                
                }
            }else{
                if(enemigo.body.velocity.y === 0) {
                    this.mueveEnemigoVertical((Phaser.Math.Between(0, 1) ? 'arriba' : 'abajo'), enemigo);
                }
                if (enemigo.body.blocked.top) {
                    this.mueveEnemigoVertical('arriba', enemigo);                              
                } else if (enemigo.body.blocked.bottom) {
                    this.mueveEnemigoVertical('abajo', enemigo);                
                }
            }
        });
        
    }

}

