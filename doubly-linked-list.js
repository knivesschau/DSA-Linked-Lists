'use strict';

const {cycleList} = require('./misc-drills');
const {display} = require('./utility-func');

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class CycleList {
    constructor(head, tail) {
        this.head = null;
        this.tail = null;
    }

    insertFirst(item) {
        let newNode = new _Node(item);

        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        let tempNode = this.head; 
        this.head = newNode; 
        this.tail.prev = newNode; 
        newNode.next = tempNode; 

        return newNode;
    }

    insertLast(item) {
        let newNode = new _Node(item);

        if (!this.tail) {
            this.head = newNode; 
            this.tail = newNode;
            return;
        }

        let tempNode = this.tail;
        this.tail = newNode;
        tempNode.next = newNode; 
        newNode.prev = tempNode;
        return newNode;
    }

    find(item) {
        let currNode = this.head; 

        if (!currNode.next && currNode.item === item) {
            console.log(currNode);
            return currNode;
        }

        while (currNode.next !== null) {
            if (currNode.item=== item) {
                console.log(currNode);
                return currNode;
            }
            currNode = currNode.next;
        }

        if (currNode.item === item) {
            console.log(currNode);
            return currNode;
        }

        else {
            console.log('Value does not exist');
        }
    }

    remove(item) {
        let currNode = this.head;

        if (!currNode.next) {
            if (currNode.value === value) {
                this.head = null;
                this.tail = null;
                return;
            }
        }

        while (currNode.next !== null) {
            if (currNode.item === item) {
                let prevNode = currNode.prev; 
                let nextNode = currNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }
            currNode = currNode.next;
        }
    }
}

function main() {
    let DLL = new CycleList();

    DLL.insertFirst("Apple");
    DLL.insertLast("Banana");
    DLL.insertLast("Orange");
    DLL.insertLast("Grapes");

    console.log(cycleList(DLL));}

main();