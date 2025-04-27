class ListNode<T>{
    next?: ListNode<T>;
    constructor(public value: T) {}
}

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    getLinkdeListLength() {
        return this.length;
    }

    print(){
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const myList = new LinkedList<number>();
myList.add(1);
myList.add(2);
myList.add(3);

myList.print(); // 1 2 3
console.log(myList.getLinkdeListLength()); // 3