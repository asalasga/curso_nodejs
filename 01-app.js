const argv = require('./01-config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/01-multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}





// console.log(process.argv);
// let argv2 = process.argv;

// console.log('base', argv.base);
// console.log('limite', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];