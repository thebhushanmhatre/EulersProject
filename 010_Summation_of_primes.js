// Find the sum of all the primes below n.
function primeSummation(n) {
  let sum = 0
  let indices = [...Array(n)].map((i)=>1)
  indices[0] = 0
  indices[1] = 0
  let counter = 2
  while(counter < Math.sqrt(n)){
    if(indices[counter]==1){
      let remaining = 2
      while(counter*remaining < n){
        indices[counter*remaining] = 0
        remaining++
      }
    }
    counter++
  }
  // let prime_nos = []
  indices.map((value, index)=> {
    if(value==1){
      // prime_nos.push(index)
      sum += index
    }
  })
  // console.log(indices)
  // console.log(prime_nos)
  // console.log(sum)
  return sum
}

primeSummation(17);
