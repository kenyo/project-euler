// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// brute force solution
function largestPrimeFactorOf(num) {
  for (var i = Math.floor(num / 2); i > 1; i--) {
    if ((num % i) === 0 ) {
      console.log(i)
      largestPrimeFactorOf(i)
    }
  }
}

console.log(largestPrimeFactorOf(856))

// optimized:

