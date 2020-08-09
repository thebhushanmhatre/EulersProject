// 1st Attempt
function nthPrime(n) {
  let prime_numbers = [2]
  let counter = 3
  while(prime_numbers.length < n){
    if(prime_numbers.filter(x => counter % x === 0).length < 1){
      prime_numbers.push(counter)
    }
    counter++
  }
  // console.log("prime_numbers =", prime_numbers)
  return prime_numbers[n-1]
}

console.log(nthPrime(6));

// Think of better solution
