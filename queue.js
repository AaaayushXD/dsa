// Queue
//  A queue is a linear data structure that follows the FIFO (First-In First-Out) principle.

console.log(" Queue ");

function Queue() {
  let collection = [];
  // logs the elements of collection
  this.print = function () {
    console.log(collection);
  };
  // adds new element to the end of the array
  this.enqueue = function (element) {
    collection.push(element);
  };
  // removes elements from the start of the array
  this.dequeue = function () {
    return collection.shift();
  };
  // returns first element of the array
  this.front = function () {
    return collection[0];
  };
  //returns size of the array
  this.size = function () {
    return collection.length;
  };
  //checks if the array is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q1 = new Queue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.print();
q1.dequeue();
console.log(q1.front());
console.log(q1.size());
console.log(q1.isEmpty());
q1.print();

//  Priority Queue
// It add element to the queue based on their priority, if all element has same priortiy, it behaves as a queue.

function PriorityQueue() {
  let collection = [];
  // logs the elements of collection
  this.print = function () {
    console.log(collection);
  };
  // adds new element to the array based on the priority
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  // removes elements from the start of the array
  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };
  // returns first element of the array
  this.front = function () {
    return collection[0];
  };
  //returns size of the array
  this.size = function () {
    return collection.length;
  };
  //checks if the array is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let pq1 = new PriorityQueue();
pq1.enqueue(["Aayush", 3]);
pq1.enqueue(["Rohan", 2]);
pq1.enqueue(["Neha", 2]);
pq1.enqueue(["Saurabh", 1]);
pq1.print();

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.front = this.rear = -1;
  }
  ///* TO Check if the array is empty or not
  isEmpty() {
    return this.front === -1;
  }
  // * To check if array is full
  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }
  // * To add new item to the array
  enqueue(item) {
    if (this.isFull()) {
      console.log("Error: Queue is full. Cannot enqueue.");
      return;
    }

    if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }

    this.queue[this.rear] = item;
  }
  // * To delete from the array
  dequeue() {
    if (this.isEmpty()) {
      console.log("Error: Queue is empty. Cannot dequeue.");
      return;
    }

    const removedItem = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = this.rear = -1; // Reset to empty state
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    return removedItem;
  }
}

// Example Usage:
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);

console.log(circularQueue.dequeue()); // Output: 1
console.log(circularQueue.dequeue()); // Output: 2

circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6); // This will print an error since the queue is full.
