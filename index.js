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
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, item) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.key = item;
            return true;
        }
        return false;
    }
    print() {
        this.pointer = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(i + 1 + ". " + this.pointer.key);
            this.pointer = this.pointer.next;
        }
    }
}

console.log("To-Do List")

let toDoList = new SinglyLinkedList()
toDoList.add("Peer-coding");
toDoList.add("COM's Presentation Work");
toDoList.add("DES Assessment 2");
toDoList.add("SDV Labs & Assessment 3");
toDoList.add("Shopping");
toDoList.pop();
toDoList.set(2, "NOT DOING DES ASSESSMENT 2")

toDoList.print();

console.log("Due Dates")

let labDates = new SinglyLinkedList()
labDates.add("Labs 5-10 due 5/06");
labDates.add("Lab 13 due Week 15");
labDates.add("Lab 14 due Week 16");

labDates.print();