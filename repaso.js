// Declaraciòn de array vacío
const arrayA = [];
// Declaración de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaración de array con booleanos
const arrayD = [true,false,true,false];
// Declaración de array mixto
const arrayE = [1,false,"C4"];

const  numeros = [1,2,3,4,5];
let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4; 
let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4

//const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < numeros.length; index++) {
    alert(numeros[index]);
}

//TO STRING (array a string)-----------------------
const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.toString() );//imprime "marca,3,palabra"

//PUSH ----------------------------------------
//const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // --> 4
//El array ahora tiene 4 posiciones

console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]

//UNSHIFT-------------------------------------
//const miArray = ["marca", 3, "palabra"]

miArray.unshift('otro elemento')

console.log(miArray)
//[“otro elemento”, "marca", 3, "palabra"]

//POP (elimina al final)---------------------------
const nombres = ["Luis", "Ana", "Julia", "Juan"]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

//SHIFT (elimina al principio)----------------------
nombres.shift()
console.log(nombres) // ["Ana", "Julia"]

//JOIN (une los elementos del array con un caracter indicado)--------------
const otroArray = ["hola", 22, "mundo"];
console.log(otroArray.join("*")); //Imprime "hola*22*mundo"

//CONCAT (unimos dos arrays)-------------------------------------
const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

//SLICE (corta elementos de una posicion especifica y los devuelve)-----------------------------------------------------------
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
// array desde la posición 1 (inclusivo) a 3 (excluyente)
// es decir, elementos en posición 1 y 2
// masculinos contiene ['Pedro','Miguel']

//SPLICE (eliminar elementos de posicion especifica)----------------
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']

//INDEXOF (devuelve el indice de un elemento)----------------------
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Miguel') ) // ⇒ 2
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1

//Ejemplo con indexof
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre)
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

//INCLUDES (Corrobora si el elemento existe en el array)----------------
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false

//REVERSE (Invierte el orden de los elementos de un array)------------
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

//ARRAYS DE OBJETOS -------------------------------------------
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();






