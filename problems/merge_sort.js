// from wikipedia
// Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
// Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

const unsortedArray = [9,8,7,6,5,4,3,2,1]

function mergeSort(list) {
  const pivotIndex = Math.floor(list.length / 2)
  const pivot = list[pivotIndex]
  const sortedList = []

  if (list.length == 1) return list
  else if (list[0] < pivot) {
    sortedList.unshift(list[0])
    return mergeSort(sortedList)
  } else if (list[0] >= pivot) {
    sortedList.push(list[0])
    return mergeSort(sortedList)
  }
}

console.log(mergeSort(unsortedArray)) // => [1, ... 9]


/**
 * An implementation for Mergesort. Less efficient
 * than Quicksort. Again, you'd just use Array.sort
 * but if you found yourself unable to use that
 * there's always this option.
 *
 * Tests with:
 *
 * var array = [];
 * for(var i = 0; i < 20; i++) {
 *   array.push(Math.round(Math.random() * 100));
 * }
 *
 * Mergesort.sort(array);
 *
 * @author Paul Lewis
 */
var Mergesort = (function() {

  /**
   * Sorts the array by breaking it down
   * into smaller chunks.
   *
   * @param {Array} array The array to sort
   */
  function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  /**
   * Merges two sublists back together.
   * Shift either left or right onto
   * the result depending on which is
   * lower (assuming both exist), and simply
   * pushes on a list if the other doesn't
   * exist.
   *
   * @param {Array} left The left hand sublist
   * @param {Array} right The right hand sublist
   */
  function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }

    return result;

  }

  return {
    sort: sort
  };

})();
