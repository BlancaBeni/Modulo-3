class Stack {
    constructor(){
        this.items = []; //Usamos un array para almacenar los elementos
    }
    //Push: agregando un elemento a la cima de la pila
    push(element){
        this.items.push(element);
    }

    //Remueve y devuelve de la cima de la pila
    pop(){
        if(this.isEmpty()){
            return "La pila esta vacia."
        }
        return this.items.pop();
    }

    //Devuelve el elemento de la cima SIN removerlo 
    peek(){
        if(this.isEmpty()){ //indica si la pila esta vacia 
            return "La pila esta vacia."
        }
        return this.items[this.items.length-1] //Length es para saber la posición de nuestros items
    }

    //Verificar si la pila esta vacia
    isEmpty(){
        return this.items.length === 0;
    }

    //Devuelva el tamaño de nuestra pila 
    size(){
        return this.items.length;
    }

    //Imprimir los elementos que se encuentran dentro de nuestra pila 
    printStack(){
        let str = ""; // cadena vacia 
        for(let indice = 0; indice < this.items.length; indice++){
            str += this.items[indice] + " "; //str = str + this.items[i]
        }
        console.log(str)
    }
}

//EJEMPLO: 
let pila = new Stack();

//Apilamos 
pila.push(1)
pila.push(2)
pila.push(3)

//Cima de mi pila 
console.log("Cima de la pila: ", pila.peerk());
console.log("Elemento eliminado: ", pila.pop());
pila.printStack();
pila.pop(); //elimina número 2
pila.pop(); //elimina número 1 
console.log("Cima de la pila: ", pila.peerk());
console.log("Tamaño de mi pila: ", pila.size());