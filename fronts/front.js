class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Linked {
    constructor(){
        this.head = null;
    }

    addFront(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;

        this.head = newNode;
        return this;
    }
    removeFront() {
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    Front(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
        }
        return current;
    }
}
let alpha = new Linked
alpha.addFront(27).addFront(32)
console.log('alphabet',alpha)
alpha.removeFront()
console.log(alpha)
console.log(Front())