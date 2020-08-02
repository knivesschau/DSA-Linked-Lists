'use strict';

function listReverser(list) {
    let reversedHead = null; 
    let currNode = list.head; 
    let nextNode; 

    while (currNode !== null) {
        nextNode = currNode.next;
        currNode.next = reversedHead;
        reversedHead = currNode;
        currNode = nextNode;
    }

    list.head = reversedHead;
    return list;
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
       listLength++;
       prevNode = currNode;
       currNode = currNode.next;
   }

   let midpoint = (Math.ceil(listLength / 2) - 1); 
   currNode = list.head; 
   prevNode = list.head; 

   while (index < midpoint) {
       prevNode = currNode; 
       currNode = currNode.next; 
       index++; 
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

module.exports = {
    listReverser,
    findThird,
    findMid,
    cycleList,
    listSort
}