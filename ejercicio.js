//const paises = ["Argentina", "Brasil", "Uruguay", "Paraguay", "Chile", "Bolivia"];

// //ahora quisiera agregar paises a mi array...
 //paises.push(prompt('Ingrese un pais:'))
//console.log(paises)

//Muestro cada uno de los paises
// paises.forEach((pais)=>{
//     console.log(pais)
// })
// //buscar un pais con Find
 //let paisBuscado = prompt("Ingrese el pais que busca:")
// const paisEncontrado = (paises.find(e => e===paisBuscado))
// console.log('el pais encontrado es:'+paisEncontrado)

// //filtrar todos los elementos que coincidan
// const paisesEncontrados = (paises.filter(e => e.includes (paisBuscado)))
// console.log(paisesEncontrados)
// console.log(paises)

// //si usara "some" me retornaria true o false respondiendo a si existen en el array o no
// const paisesEncontrados = (paises.some(e => e===paisBuscado))
// console.log(paisesEncontrados)

// //Map recorre y opera cada uno de los elementos y devuelve los resultantes
// const resultado = paises.map((el) => el)
// console.log(resultado)

// //sort
// paises.sort();
// console.log(paises)
//-------------------------------------------------
class Pais{
    constructor(nombre, poblacion){
        this.nombre = nombre;
        this.poblacion = poblacion;
    }
}

const paises = [];
paises.push(new Pais("Argentina", 45));
paises.push(new Pais("Chile", 19));
paises.push(new Pais("Brasil", 212));


console.log(paises);

//iteramos el array de objetos 
//paises.forEach((nombre, poblacion) =>console.log(nombre, poblacion))

//buscamos un pais en el array de objetos
// let paisBuscado = prompt("Ingrese el pais que busca:")
// const paisEncontrado = (paises.find(e => e.nombre===paisBuscado))
// console.log('el pais encontrado es:'+paisEncontrado.nombre + paisEncontrado.poblacion)

//filtramos----------------------------------
// let paisBuscado = prompt("Ingrese el pais que busca:")
// const paisesEncontrados = paises.filter(e => e.nombre.includes (paisBuscado))
// console.log(paisesEncontrados)

//Mapeamos----------------------------
// const poblMil = paises.map((el)=>{
//     return{
//         nombre: el.nombre,
//         poblacion : el.poblacion * 1000000
//     }
// })
// console.log(poblMil)

//Reduce, sumamos las poblaciones
// const totalPoblacion = paises.reduce((acc, el)=> acc + el.poblacion, 0)
// console.log('el total de la poblacion es:'+totalPoblacion)

