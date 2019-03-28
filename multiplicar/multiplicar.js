const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`ERROR: ${base} no es un numero.`)
            return
        }

        console.log('==============================='.green);
        console.log(`== Tabla de  ${base} ==`.green);
        console.log('==============================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${i} * ${limite} = ${i * limite}`);
        };
    });
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`ERROR: ${base} no es un numero.`)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i * base}\n`;
        };


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) throw err;
            console.log('El archivo',
                colors.green(`tabla-${base}-al-${limite}.txt`),
                'ha sido creado.');
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
};