class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(item) {
        let newItem = new Node(item);
        if(!this.head) {
            this.head = newItem;
            this.tail = this.head;
        } else {
            this.tail.next = newItem;
            this.tail = newItem;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    print() {
        this.pointer = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(this.pointer.key + " -> ");
            this.pointer = this.pointer.next;
        }
        console.log("null")
    }
}

let toDoList = new SinglyLinkedList()
toDoList.add("Peer-coding");
toDoList.add("COM's Presentation Work");
toDoList.add("DES Assessment 2");
toDoList.add("SDV Labs & Assessment 3");
toDoList.add("Shopping");
toDoList.pop();

toDoList.print();