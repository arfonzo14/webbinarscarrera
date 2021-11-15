import Carga from './escenas/carga';
import Menu from './escenas/menu';
import Nivel1 from './escenas/nivel1';
import Nivel2 from './escenas/nivel2';
import Nivel3 from './escenas/nivel3';
import FinNivel from './escenas/finnivel';
import SeleccionNivel from './escenas/seleccionnivel';
import HUD from './escenas/hud';
import Creditos from './escenas/creditos';
import Ajustes from './escenas/ajustes';

 

const Configuracion = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',     
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 854,
        height: 480
    },    
    pixelArt: true,
    audio: {
        disableWebAudio: true
    },
    scene: [Carga, Menu, SeleccionNivel, Nivel1, Nivel2, Nivel3, FinNivel, HUD, Creditos, Ajustes],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false 
        }
    }
}

export default Configuracion;