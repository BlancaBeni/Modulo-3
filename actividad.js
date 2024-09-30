/*Hacer una función que reciba como 
parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).*/

class mifuncion{
    constructor(number){

    this.items=["Manzana","Cebolla","Apio","Naranja","Papaya","Sandía","Melón"]
    this.number=number
    }
    Array(){

    for (let i = 0; i = (this.items.length-this.number); i++) {
        this.items.pop();

    }
    console.log(this.items);

    }
}

let ejer=new mifuncion(4)
ejer.Array()

/*
 Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, 
 de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
*/

function reemplazar(){
    this.item = ([3,2,3,4,6,8,1,2,5,5], 7, 2)
    this.number = 
}