'use strict';

const {display, listSize, isEmpty, findPrev, findLast} = require('./utility-func');
const {listReverser, findThird, findMid, listSort} = require('./misc-drills.js');

// Linked List Drills 
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
    
class LinkedList {
    constructor() {
        this.head = null; 
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(item, nodeVal) {
        let currNode = this.head;
        let prevNode = this.head;

        if (!this.head) {
            return null;
        }

        if (this.head.value === nodeVal) {
            this.head = new _Node(item, this.head);
        }

        while ((currNode !== null && currNode.value !== nodeVal)) {
            prevNode = currNode; 
            currNode = currNode.next; 
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        prevNode.next = new _Node(item, currNode);
    }

    insertAfter(item, nodeVal) {
        const newNode = new _Node(item);
        let currNode = this.head; 

        while (currNode.next !== null && currNode.value !== nodeVal) {
            currNode = currNode.next;
        }

        const tail = currNode.next; 
        currNode.next = newNode; 
        newNode.next = tail; 
    }

    insertAt(item, index) {
        const newNode = new _Node(item);

        let count = 0;
        let prevNode = this.head;
        let currNode = this.head; 

        while (currNode.next !== null && count !== index) {
            prevNode = currNode; 
            currNode = currNode.next; 
            count++; 
        }

        if (count !== index) {
            console.log('No value at given index');
        }

        if (this.head.next === null) {
            this.head = newNode; 
            newNode.next = currNode; 
            return; 
        }

        prevNode.next = newNode; 
        newNode.next = currNode; 
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head; 
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head; 

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head; 
        let previousNode = this.head; 

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode; 
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        previousNode.next = currNode.next;
    }
}

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    SLL.insertLast("Tauhida");
    SLL.remove("Husker"); 
    SLL.insertBefore("Athena", "Boomer");
    SLL.insertAfter("Hotdog", "Helo");
    SLL.insertAt("Kat", 3);
    SLL.remove("Tauhida");

    console.log(display(SLL)); // original display test
    console.log(listSize(SLL));
    console.log(isEmpty(SLL));
    console.log(findLast(SLL));
    console.log(findPrev(SLL, "Boomer"));
    console.log(findThird(SLL));
    console.log(findMid(SLL));
    
    console.log(listSort(SLL)); 
    console.log(display(SLL)); // test to see if list sort worked 

    console.log(listReverser(SLL));
    console.log(display(SLL)); // test if reversed list worked 
}

main();

// Mystery Program
/*  Function loops through linked list and removes all duplicate values, complexity is linear O(n)*/