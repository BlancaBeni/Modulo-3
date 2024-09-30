class Queue{
    constructor(){
        this.items = [];
    }

    //Agregar un elemento al final de la cola 
    enqueue(element){
        this.items.push(element);
    }
    //Removerlo y devolver el que esta enfrente de la cola 
    dequeue(){
        if(this.isEmpty()){
            return "La cola esta vacia."
        }
        return this.items.shift(); //shift elimina 
    }
    //Devolver el elemnto enfrente SIN removerlo 
    front(){
        if(this.isEmpty()){
            return "La cola esta vacia."
        }
        return this.items[0];
    }
    //Verificar si esta vacia 
    isEmpty(){
        return this.items.length === 0;
    }
    //Tamaño 
    size(){
        return this.items.length;
    }

    //Imprimirlos 
    printQueue(){
        let str = ""; // cadena vacia 
        for(let indice = 0; indice < this.items.length; indice++){
            str += this.items[indice] + " "; //str = str + this.items[i]
        }
        console.log(str)
    }
}

//EJEMPLO: 
let cola = new Queue();
cola.enqueue("Juan"); //encolar (agregar un elemento a la cola)
cola.enqueue("Maria");
cola.enqueue("Pedro");
cola.enqueue("Fernenda");
console.log("Frente de la cola esta: ", cola.front());
console.log("Persona atendida: ", cola.dequeue());//desencolar (retira el primer elemento de la cola) persona atendia 
console.log("Persona atendida: ", cola.dequeue()); //persona atendida
console.log("--Falta por atender a, --", cola.size())
cola.printQueue();