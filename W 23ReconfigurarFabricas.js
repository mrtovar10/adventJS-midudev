// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

// const from = 'BAL'
// const to   = 'LIB'
// const canReconfigure(from, to) // true
// /* la transformación sería así:
// B -> L
// A -> I
// L -> B
// */

// const from = 'CON'
// const to   = 'JUU'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */


export default function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
    if(!(from.length === to.length)) return false // longitudes distintas
    let rFrom = from.match(/(.)\1+/g), rTo = to.match(/(.)\1+/g) 
    if(!rFrom && !rTo) return true
    if(!rFrom && rTo || rFrom && !rTo) return false
    for(let i = 0; i < rFrom.length; i++) if(rFrom[i].length !== rTo[i].length) return false
    return true
}


// console.log(canReconfigure('BAL', 'LIB')); // true
// console.log(canReconfigure('CON', 'JUU')); // false
// console.log(canReconfigure('XBOX', 'XXBO')); // false
// console.log(canReconfigure('MMM', 'MID')) // false
// console.log(canReconfigure('AA', 'MID')) // false
// console.log(canReconfigure('XBOX', 'XBOX')); // true
// console.log(canReconfigure('XBOX', 'BOXX')); // false
// console.log(canReconfigure('XBOX', 'XOBX')); // true
// console.log(canReconfigure('XXXACDDK', 'FFULGGGM')); // false
// console.log(canReconfigure('XXXACDDK', 'FFFULGGM')); // true
