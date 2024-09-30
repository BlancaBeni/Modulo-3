//Clase: Nodo
//Dato, Puntero(Next)

class Node {
    constructor(data){
        this.data = data; //Almacena el dato en el nodo 
        this.next = null; //Apunta al siguiente nodo (inicialmente nulo)
    }
}

//Clase: Lista Enlazada 
//Si no tenemos data => null 

class LinkedList {
    constructor(){
        this.head = null; //Referencia al primer nodo de la lista 
    }

    //Metodo de la lista enlazada: Agregar inicio
    insertAtBeninning(data){ 
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    //Metodo de la lista enlazada: Agregar Final 
    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){//Si la lista esta vacia 
            //El nuevo nodo se convierte en la cabeza
            this.head = newNode;
            return;
        }

        let current = this.head; //Bucle 
        while(current.next) {//Recorremos la lista hasta encontrar el ultimo nodo 
            current.next = newNode; //Enlazando el nuevo nodo al final         
        }
    }
    //Eliminar el primer nodo (con un dato en especifico)
deleteNode(data){
    //Si la lista esta vacia no hay nada que eliminar 
    if(!this.head){
        return;
    }

    if(this.head.data === data){//  Si el dato esta en la cabeza 
        this.head = this.head.next; //Actualizamos la cabeza
        return; 
    } 

    let current = this.head;
    let previus = null;
    while(current && current.data !== data){ //Buscamos el nodo eliminar
        previus = current;
        current = current.next;
    }
    
    if(current){//Si encontramos el nodo 
        //Lo eliminamos reajustando los enlaces 
        previus.next = current.next;

    }

}

//Imprimir los elementos
    printList(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.data + "";
            current = current.next; 
        }
        console.log(str)
    }

}

//Ejemplo: Playlist

