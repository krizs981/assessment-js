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

'use strict';

const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

let textMinusculas = text.toLowerCase();

textMinusculas = textMinusculas.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

const textSplit = textMinusculas.split(' ');

console.log(textSplit.sort());
