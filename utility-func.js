'use strict';

function display(list) {
    let currNode = list.head; 
    let prevNode = list.head; 
    let listArray = [];

    while (currNode !== null) {
        prevNode = currNode; 
        listArray.push(currNode.value);
        currNode = currNode.next;
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
        currIndex++; 
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

    while (currNode !== null && currNode.value !== item) {
        prevNode = currNode; 
        currNode = currNode.next;
    }

    if (!currNode) {
        return 'Node not found.';
    }

    return prevNode.value;
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

module.exports = {
    display, 
    listSize,
    isEmpty,
    findPrev,
    findLast
};