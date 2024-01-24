function quicksort(arr, low, high) {
  if (low < high) {
    // Partition the array and get the index of the pivot element
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the subarrays on both sides of the pivot
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];

  // Index of the smaller element
  let i = low - 1;

  // Iterate through the array and rearrange elements around the pivot
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap arr[i+1] and pivot
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // Return the index of the pivot
  return i + 1;
}
