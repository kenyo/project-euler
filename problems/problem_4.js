// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function findPalindrome(x, y) {
  // check if args are 3-digit numbers
  if (x.toString().length !== 3 || y.toString().length !== 3) return 'Provide two 3-digit numbers'

  const product = (x * y).toString()
  const digitLength = product.length
  if ((digitLength % 2) === 0) {
    const frontwards = product
    const backwards = product.split('').reverse().join('')

    if (frontwards === backwards) return product
    else return false
  } else {
    const frontwards = product
    const backwards = product.split('').reverse().join('')

    if (frontwards === backwards) return product
    else return false

  }
}

function main() {
  // largest possible three-digit number
  const startNum = 999
  const productArray = []

  for (let i = startNum; i > 99; i--) {
    for(let j = startNum; j > 99; j --) {
      productArray.push(findPalindrome(i, j))
    }
  }
  const palindromeArray = productArray.filter(x => x)
                                      .map(x => parseInt(x))

  const largestPalindrome = Math.max(...palindromeArray)
  return largestPalindrome
}

console.log(main())
