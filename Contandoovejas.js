// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

// const ovejas = [
//   { name: 'Noa', color: 'azul' },
//   { name: 'Euge', color: 'rojo' },
//   { name: 'Navidad', color: 'rojo' },
//   { name: 'Ki Na Ma', color: 'rojo'},
//   { name: 'AAAAAaaaaa', color: 'rojo' },
//   { name: 'Nnnnnnnn', color: 'rojo'}
// ]
// Al ejecutar el método debería devolver lo siguiente:

// const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

// Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]


export default function contarOvejas(ovejas) {
    // aquí tu magia
    let ovejasFiltradas = ovejas.filter( element => {
        let name = element.name.toLowerCase().split('')
        if (element.color === 'rojo') {
            let array = name.filter(letra => (letra === 'a' || letra === "n"))
            if (!array.length) return false
            return [... new Set(array)].length === 2
        }
        return false
    })
    return ovejasFiltradas
  }