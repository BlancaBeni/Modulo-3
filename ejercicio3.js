// Clase Nodo
// Dato y puntero

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Clase: Lista Enlazada
//Si no tenemos data => null

class LinkedList{
    constructor(){
        this.head = null;
    }

//AgregarInicio
    insertABeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

//AgregarFinal
    insertAtEnd(data){
        const newNode = new Node(data);
       if(!this.head){
        this.head = newNode;
        return;
       } 

       let current = this.head;
       while(current.next){
        current = current.next;
       }
       current.netx = newNode;
    }

//Eliminar el primer nodo(con un dato en especifico
deleteNode(data){
    if(!this.head){
        return;
    }
    if(this.head.data === data){
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    let previous = null;
    while(current && current.data !== data){
        prevoious = current;
        current = current.next;
    }

    if(current){
        previous.next = current.next;
    }
}
//Imprimir elementos
printList(){
    let current = this.head;
    let str = "";
    while(current){
        str += current.data + " ";
        current = current.next;
    }
    console.log(str)
}

// Verificar si un dato existe en la lista
contains(data) {
    let current = this.head;
    while (current) {
        if (current.data === data) {
            return true;
        }
        current = current.next;
    }
    return false;
}

// AgregarFinal (sin repetidos)
insertAtEnd(data) {
    if (this.contains(data)) { // Verificar si el dato ya existe
        return; // No hacer nada si ya está presente
    }

    const newNode = new Node(data);
    if (!this.head) { // Si la lista esta vacia
        //El nuevo nodo se convierte en la cabeza
        this.head = newNode;
        return;
    }

    let current = this.head;
    while (current.next) { //Recorremos la lista hasta encontrar el ultimo n
        current = current.next;
    }
    current.next = newNode; // Enlazando el nuevo nodo al final
}
}


//Ejercicio 1: Playlist

let playlist = new LinkedList();
playlist.insertAtEnd("Canción 1: Rammstein - Sonne");
playlist.insertABeginning("Canción 2: Kiss - Forever");
playlist.insertAtEnd("Canción 3: AC/DC - Back in Black");
playlist.insertAtEnd("Canción 3: AC/DC - Back in Black");
playlist.printList();