// Requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor recibido de limite no es un número: ${base}`);
            return;
        }

        console.log('==================='.green);
        console.log(`=== Tabla de ${base} ===`.green)
        console.log('==================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(` ${base} * ${i} = ${base * i}\n`);
        }
    })

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor recibido de base no es un número: ${base}`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor recibido de limite no es un número: ${limite}`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (` ${base} * ${i} = ${base * i}\n`);
        }


        fs.writeFile(`Tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}