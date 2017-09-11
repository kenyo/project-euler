// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const fourMillion = 4000000
let idx = 1
let array = [1, 2]

// returns entire fibonacci sequence up to `num`
function fibUpTo(num) {
  while (array[idx] < fourMillion) {
    const nextFibNumber = array[idx] + array[idx - 1]
    if (nextFibNumber < fourMillion) array.push(nextFibNumber)
    idx++
    fibUpTo(fourMillion)
  }
  return array
}

const fibList = fibUpTo(fourMillion)
const sumEvens = fibList.filter(x => (x % 2) == 0).reduce((x, sum) => {return x + sum}, 0)
console.log(sumEvens)
