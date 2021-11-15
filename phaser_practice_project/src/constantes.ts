const Constantes = {
    EVENTOS:{
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion',
        RELOJ: 'reloj',
        RECOLECTAR: 'recolectar'
    },
    MENU:{
        TITULO: 'SUPER RANINJA',
        JUGAR: 'JUGAR',
        AJUSTES: 'AJUSTES',
        CREDITOS: 'CREDITOS'
    },
    HUD:{
        VIDAS: 'VIDAS:',
        CESTA: 'cesta' 
    },    
    ESCENAS:{
        CARGA: 'Carga',
        MENU: 'Menu',
        NIVEL1: 'NIVEL 1',
        NIVEL2: 'NIVEL 2',
        NIVEL3: 'NIVEL 3',
        FINNIVEL: 'FinNivel',
        HUD: 'HUD', 
        CREDITOS: 'Creditos',
        AJUSTES: 'Ajustes',
        SELECCIONNIVEL: 'SeleccionNivel'
    },
    REGISTRO:{
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion',
        RELOJ: 'reloj',
        MUSICA: 'musica',
        EFECTOS: 'efectos',
        OBJETOSRECOLECTAR: 'numobjetosrecolectar'
    },
    MAPAS:{
        NIVEL1: {
            TILEMAPJSON: 'mapaNivel1',            
        },
        NIVEL2: {
            TILEMAPJSON: 'mapaNivel2',            
        },
        NIVEL3: {
            TILEMAPJSON: 'mapaNivel3',            
        },
        CAPA_PLATAFORMAS: 'Plataformas',
        TILESET: 'nivelestileset',
        POSICIONFINAL : 'posicionfinal',
        ENEMIGOS: 'enemigos',
        PLATAFORMASMOVILES: 'plataformasmoviles',
        PLATAFORMAVERTICAL: 'vertical',
        PLATAFORMAHORIZONTAL: 'horizontal',
        RECOLECTABLES: 'recolectables'
    },
    FONDOS:{
        MENU: 'Green',
        NIVEL1: 'Brown',
        NIVEL2: 'Pink',
        NIVEL3: 'Blue'
    },
    FUENTE: {
        JSON: 'fuenteJSON',
        IMAGEN: 'imagenFuente',
        BITMAP: 'fuentePixel'
    },
    JUGADOR:{
        ID:'jugador',
        ANIMACION:{
            SALTO: 'jump-0',
            ESPERA: 'idle',
            CORRER:  'run'
        }
    },
    OBJETOS:{
        FINAL:'final'
    },
    ENEMIGOS:{
        BUNNY:{
            ID:'bunny',
            ANIM:'bunnyCorre',
            VELOCIDAD: 75            
        },
        CHICKEN:{
            ID:'chicken',
            ANIM:'chickenCorre',
            VELOCIDAD: 100
        },
        MUSHROOM:{
            ID:'mushroom',
            ANIM:'mushroomCorre',
            VELOCIDAD: 100
        },
        RADISH:{
            ID:'radish',
            ANIM:'radishCorre',
            VELOCIDAD: 100
        },
        EXPLOSION:{
            ID:'explosion',
            ANIM:'explota'
        }
    },
    PLATAFORMAMOVIL:{
        NIVEL1:{
            ID:'plataformamovil',
            VELOCIDAD: 60
        }, 
        NIVEL2:{
            ID:'plataformamovil2',
            VELOCIDAD: 80 
        },
        NIVEL3:{
            ID:'plataformamovil3',
            VELOCIDAD: 200 
        }
        
    },
    SONIDOS:{
        EFECTOS:{
            SALTAR:'saltar',
            CAERSOBREENEMIGO: 'caersobre',
            QUITARVIDA:'vida',
            RECOLECTAR: 'recolectar'
        },
        BANDASONORA:'bandasonora'
    },
    RECOLECTABLES:{
        PLATANO:{
            ID:'platano',
            ANIM:'platanoAnim'            
        },
        PINA:{
            ID:'pina',
            ANIM:'pinaAnim'            
        },
        CEREZA:{
            ID:'cereza',
            ANIM:'cerezaAnim'            
        },
    }, 
    CREDITOS: {
        GAMEDEV: 'sergiflags',
        CREADOPOR: 'GAMEDEV : SERGIFLAGS\n\nWITH PHASER 3.50 AND TYPESCRIPT',
        ASSETS: 'SPRITES : PIXEL ADVENTURE BY PIXELFROG\n\n\nMUSIC : FREESOUND CARTOON THEMES LOOP\n\nBY DANIEL NORONHA', 
        VOLVER: 'VOLVER'
    },
    AJUSTES: {
        MUSICA: 'MUSICA',
        EFECTOS: 'EFECTOS',
        SONIDOON: 'sonidoon',
        SONIDOOFF: 'sonidoff',
        VOLVER: 'VOLVER'
    }, 
    FINNIVEL: {
        PUNTOS: 'PUNTUACION',
        WIN: 'YOU WIN!!',
        GAMEOVER: 'GAME OVER!!',
        BESTSCORE: 'MEJOR RESULTADO!!'
    } , 
    BASEDATOS: {
        NOMBRE: 'SUPERRANINJAv10'
    },
    CONTROL: {
        SALTO: 'controlSalto',
        IZQUIERDA: 'controlIzda',
        DERECHA: 'controlDcha'
    } 

};

export default Constantes;