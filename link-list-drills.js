'use strict';


// Linked List Drills 
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next; 
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertBefore(newItem, searchItem) {
        let currNode = this.head;
        let prevNode = this.head;

        if (!this.head) {
            return null;
        }

        if (this.head.value === searchItem) {
            this.head = new _Node(newItem, this.head)
            return;
        }

        while ((currNode !== null && currNode.value !== searchItem)) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        prevNode.next = new _Node(newItem, currNode);
    }

    insertAfter(newItem, searchItem) {
        let currNode = this.head; 
        let nextNode = this.head.next;

        if (!this.head) {
            return null;
        }

        while ((currNode !== null && currNode.value !== searchItem)) {
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        currNode.next = new _Node(newItem, currNode.next);
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

    insertAt(newItem, index) {
        let currIndex = 0;
        let currNode = this.head;
        let prevNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currIndex < index) {
            prevNode = currNode;
            currNode = currNode.next;
            currIndex ++ 
        }
        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        prevNode.next = new _Node(newItem, currNode)
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        
        while (currNode.value !== item) {
            if (currNode.next == null) {
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
        if (this.head.vlaue === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null && currNode.value !== item)) {
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
    const BlankList = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    console.log(SLL.find('Athena'))
    console.log(SLL.find('Hotdog'))
    console.log(SLL.find('Kat'))
    console.log(SLL.find('Tauhida'))

    console.log(listSize(SLL));
    console.log(isEmpty(SLL));
    console.log(isEmpty(BlankList));
    console.log(display(SLL));
    console.log(findLast(SLL));
    console.log(findPrev(SLL));
}

main();

function display(list) {
    let currNode = list.head;
    let prevNode = list.head;
    let listArray = [];

    while (currNode !== null) {
        prevNode = currNode;
        listArray.push(currNode.value)
        currNode = currNode.next
    }
    return listArray;
}

function listSize(list) {
    let currIndex = 0;
    let currNode = list.head;
    let prevNode = list.head;

    while (currNode !== null) {
        prevNode = currNode; 
        currNode = currNode.next;
        currIndex ++; 
    }
    return currIndex;
}

function isEmpty(list) {
    if (!list.head) {
        return true;
    }
    return false;
}

function findPrev(list, item) {
    let currNode = list.head;
    let prevNode = list.head;

    while (currNode !== null && currNode.value != item) {
        prevNode = currNode 
        currNode = currNode.next
    }
    if (!currNode) {
        return 'Node not found';
    }
    else {
        return prevNode;
    }
}

function findLast(list) {
    let currNode = list.head;
    let prevNode = list.head;

    while (currNode !== null) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    return prevNode;
}

//Mystery Program Drills
function listReverser(list) {
    let midNode = list.head;
    let firstNode = list.head;
    let lastNode = list.head;

    while (midNode !== null) {
        firstNode = firstNode.next;
        midNode = lastNode;
        lastNode = midNode;
        midNode = firstNode;
    }
    list.head = lastNode;
    return lastNode; 
}

function findThird(list) {
    let currNode = list.head;
    let prevNode = list.head;

    while (currNode.next.next.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    return currNode;
}

function findMid(list) {
    let currNode = list.head;
    let prevNode = list.head;
    let listLength = 0;
    let index = 0;

    while (currNode !== null) {
        listLength ++;
        prevNode = currNode;
        currNode = currNode.next;
    }
    let middle = (Math.ceil(listLength / 2) - 1)
    currNode = list.head;
    prevNode = list.head;

    while (index < middle) {
        prevNode = currNode;
        currNode = currNode.next;
        index ++
    }
    return currNode; 
}

function cycleList(list) {
    let item1 = list.head;
    let item2 = list.head;

    while (item1 !== item2) {
        item1 = item1.next;
        item2 = item2.next.next;
    }
    if (item1 === item2) {
        return true;
    }
    return false;
}

function listSort(list) {
    let currNode = list.head;
    let head = list.head;
    let store;
    let sorting = true; 

    while (sorting) {
        sorting = false;

        while (currNode.next !== null) {
            if (currNode.value > currNode.next.value) {
                store = currNode.value;
                currNode.value = currNode.next.value;
                currNode.next.value = store;
                sorting = true;
            }
            currNode = currNode.next;
        }
        if (!currNode.next) {
            currNode = list.head;
        }
        return list;
    }
}