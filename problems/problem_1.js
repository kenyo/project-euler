// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// 1000 element array [0, 1, 2, ...]
const testArray = [...new Array(1000).keys()]

function main(array) {
  const multOfThree = array.filter(x => (x % 3) === 0)
  const multOfFive = array.filter(x => (x % 5) === 0)

  const uniqueMultiples = Array.from(new Set(multOfThree.concat(multOfFive)))
  return uniqueMultiples.reduce((x, y) => {return x + y}, 0)
}

console.log(main(testArray))
