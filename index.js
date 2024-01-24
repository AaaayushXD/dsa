// Data Structure and Algorithm
console.log("DATA STRUCTURE & ALGORITHM");
console.log("///////////////////////");

const constant = function () {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
constant();

// O(n)
const linear = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
linear([2, 3, 4, 5, 6]);

// O(n^2)
const quadratic = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`${i}, ${j}`);
    }
  }
};

quadratic(2);

// O(logn)
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let start = 0;
let end = arr.length - 1;
let x = 2;
function binarySearch(arr, start, end, x) {
  if (start > end) return false;
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === x) return true;
  if (arr[midIndex] > x) return binarySearch(arr, start, midIndex - 1, x);
  else return binarySearch(arr, midIndex + 1, end, x);
}

console.log(binarySearch(arr, start, end, x));

/*
Selection sort
arr = [6,4,2,5,1,3]
    - [1,4,2,5,6,3]
    -[1,2,4,5,6,3]
    -[1,2,3,5,6,4]
    -[1,2,3,4,6,5]
    -[1,2,3,4,5,6]
O(n^2)


Bubble sort
arr = [6,4,2,5,1,3]
    -[4,6,2,5,1,3]
    -[4,2,5,1,3,6]
    -[2,4,1,3,5,6]
    -[2,1,3,4,5,6]
    -[1,2,3,4,5,6]
O(n^2)

Merg Sort
arr = [6,4,2,5,1,3]
    -[4,6][2,5][1,3]
    -[2,4,5,6][1,3]
    -[1,2,3,4,5,6]
O(nlogn)

*/

// Selection sort

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the index of the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

// Example usage:
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
selectionSort(arrayToSort);
console.log("Sorted array: " + arrayToSort);

// Bubble sort

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements because they are in the wrong order
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// Example usage:
const arrayToSortBubble = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arrayToSortBubble);
console.log("Sorted array: " + arrayToSortBubble);

// Merge Sort

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort and merge the two halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge them into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const arrayToSortMerge = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(arrayToSortMerge);
console.log("Sorted array: " + sortedArray);

function intPalindrome(number) {
  let originalNumber = number;
  let reverseNumber = 0;
  if (number < 0) return false;
  while (number > 0) {
    const digit = number % 10;
    reverseNumber = reverseNumber * 10 + digit;
    number = Math.floor(number / 10);
  }
  return originalNumber === reverseNumber;
}

console.log(intPalindrome(121));

function strPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x !== y) return false;
  }
    return true
}

function is_palindrome(str) {
    let ans = strPalindrome(str);
    if (ans) {
        console.log('Palindrome');
    } else {
        console.log('Nope');
    }
}
let test = "aayush"
is_palindrome(test);