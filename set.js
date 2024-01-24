//  Sets:  collections that doesnt contain duplicates
console.log(" Sets ");

// Creating a set
function mySet() {
  let collection = []; //this will be our set

  //this checks whether the element is in the set
  this.has = function (e) {
    return collection.indexOf(e) !== -1;
  };

  //returns the values of set
  this.values = function () {
    return collection;
  };

  //this method adds value to the set
  this.add = function (e) {
    if (!this.has(e)) {
      collection.push(e);
      return true;
    }
    return false;
  };

  //this method removes an element from the set
  this.remove = function (e) {
    if (this.has(e)) {
      index = collection.indexOf(e);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this is a property which returns size of the set
  this.size = function () {
    return collection.length;
  };

  // NOT IN ES6 //

  // returns union of 2 sets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //returns intersection of 2 sets
  this.intersection = function (otherSet) {
    let intersectSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectSet.add(e);
      }
    });
    return intersectSet;
  };

  // returns the difference of 2 sets
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //returns if the set is the subset of different set
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setA.add("b");
setB.add("a");
setB.add("c");
setB.add("b");
setB.add("e");
console.log(setA.values());
console.log(setB.values());
console.log(setA.has("a")); // returns true
console.log(setA.subset(setB)); //returns true
console.log(setA.intersection(setB).values()); // returns ['a', 'b']
console.log(setB.difference(setA).values()); // returns ['c', 'e']
console.log(setA.difference(setB).values()); // returns []
console.log(setA.union(setB).values()); // returns [ 'a' , 'b' , 'c' , 'e' ]
