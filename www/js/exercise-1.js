/**
 * #############################
 * ##  E J E R C I C I O   1  ##
 * #############################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético.
 *
 * Resultado esperado: ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]
 *
 */

//  ***RESUELTO***
// 'use strict';

// const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

// let textMinusculas = text.toLowerCase();

// textMinusculas = textMinusculas.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

// const textSplit = textMinusculas.split(' ');

// console.log(textSplit.sort());

// EL SEGUNDO

//  *      ["142", "88", "12", "3", "1", "true", "false"],
//  *      ["143", "120", "10", "4", "2", "false", "false"],
//  *      ["144", "46", "18", "1", "1", "true", "true"],
//  *      ["145", "52", "8", "1", "1", "true", "true"],
//  *      ["146", "60", "3", "1", "1", "true", "true"],
//  *      ["147", "140", "4", "4", "2", "true", "true"],
//  *      ["148", "160", "9", "5", "3", "true", "true"],
//  *      ["149", "60", "11", "1", "1", "false", "true"]
//  *    ]
//  *
//  * Tips:
//  *
//  *  - El método "nombreString.trim()" elimina los espacios en blanco al principio
//  *    y al final del array. No elimina los espacios que haya de por medio.
//  *
//  *    '    ¡Hola ola caracola!    '.trim() ---> '¡Hola ola caracola'
//  *
//  *  - Si queremos dividir un string donde haya un salto de línea podemos utilizar
//  *    "nombreString.split('\n')".
//  *
//  */

'use strict';

let data = `  "id", "m2", "antiguedad", "habitaciones", "baños", "amueblado", "ascensor"
142, 88, 12, 3, 1, true,  false
143, 120, 10,  4, 2, false,  false
144, 46, 18,  1, 1, true,  true
145, 52, 8,  1, 1, true,  true
146, 60, 3,  1, 1, true,   true
147, 140, 4,  4, 2, true,   true
148, 160, 9,  5, 3, true,  true
149, 60, 11,  1, 1, false,  true
   `;

let newData = data.split('\n');

let newData2 = newData.trim();

console.log(newData2);
// let newData = data.trim();

// let newData = data.split('\n');

// let dataSplit = data.split(' ');

// console.log(dataSplit);

// function sinEspacios ()=>{ dataSplit.trim();}

// sinEspacios()
