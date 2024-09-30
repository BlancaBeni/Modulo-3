/*Hacer una función que reciba como 
parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).*/

class miFuncion{
    constructor(){
    this.items = (["Manzana","Cebolla","Apio","Naranja","Papaya","Sandía","Melón"],4) 
    }

    pop(){
        if(this.isEmpty()){
            return "La pila esta vacia."
        }
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }
    
}

let pila = new miFuncion();

pila.pop(4);
pila.pop(5);
pila.pop(6);
console.log("Salida elementos: ")