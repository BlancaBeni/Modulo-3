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