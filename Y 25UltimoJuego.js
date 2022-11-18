// Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

// Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

// El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

// Un espacio vacío es que no hay nada
// Una m es el ratón
// Un * es la comida
// Vamos a ver unos ejemplos:

// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*']
// ]

// canMouseEat('up',    room)   // false
// canMouseEat('down',  room)   // true
// canMouseEat('right', room)   // false
// canMouseEat('left',  room)   // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*']
// ]

// canMouseEat('up',    room2)   // false
// canMouseEat('down',  room2)   // false
// canMouseEat('right', room2)   // true
// canMouseEat('left',  room2)   // false
// ¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

export default function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    let arrayComida = [];
    let posMousei = null, posMousej = null

    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[0].length; j++) {
            if(game[i][j] === '*') arrayComida.push([i,j])
            if(game[i][j] === 'm') {posMousei = i; posMousej = j}
        }
    }
    if(direction === 'right') return !!arrayComida.find(e => (e[0]===posMousei && e[1]===posMousej+1))
    if(direction === 'left') return !!arrayComida.find(e => (e[0]===posMousei && e[1]===posMousej-1))
    if(direction === 'up') return !!arrayComida.find(e => (e[0]===posMousei-1 && e[1]===posMousej))
    if(direction === 'down') return !!arrayComida.find(e => (e[0]===posMousei+1 && e[1]===posMousej))
}