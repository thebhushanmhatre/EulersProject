// 1st Attempt
// Passed on fcc
function largestPrimeFactor1(number) {
  if(isNumberPrime(number)){return number;}
  let counter = 2;
  let smallerNumber = number;
  let primeArrayFactors = [];
  while(smallerNumber>=counter){
    while(smallerNumber%counter==0){
      if (primeArrayFactors.length==0){primeArrayFactors.push(counter);}
      if(primeArrayFactors[primeArrayFactors.length-1]!=counter && isNumberPrime(counter)){
        primeArrayFactors.push(counter);
      }
      smallerNumber=smallerNumber/counter;
    }
    counter++;
  }
  return primeArrayFactors[primeArrayFactors.length-1];
}

function isNumberPrime(numberToBeChecked){
  let halfOfCounter = parseInt(numberToBeChecked/2 + 1);
  let counter = 2;
  while(halfOfCounter > counter){
    if(numberToBeChecked % counter == 0){return false;}
    counter++;
  }
  return true;
}

// 2nd Attempt
// I think this one better on Time but Fails on Space (i.e. Chrome gives "Out of Memory")
// I guess prime_indices is too Big
function largestPrimeFactor(number) {
  let prime_numbers = getPrimeNums(number)
  if(prime_numbers[prime_numbers.length-1] === number){
    return number
  }
  for(let i=prime_numbers.length; i>1; i--){
    if(number % prime_numbers[i] === 0){
      return prime_numbers[i]
    }
  }
}

function getPrimeNums(number){
  var prime_indices = []
  var prime_numbers = []
  for(var i=0; i<number+1; i++){
    prime_indices[i] = 1
  }
  prime_indices[0] = 0
  prime_indices[1] = 0
  for(var i=2; i<=Math.sqrt(number); i++){
    if(prime_indices[i]==1)
    // Multiples of prime nums
    for(var j=2; i*j<=number; j++){
      prime_indices[i*j] = 0
    }
  }
  prime_indices.map((value, index)=>{
    if(value==1){
      prime_numbers.push(index)
    }
  })
  return prime_numbers
}

var startDate1 = new Date()
console.log(largestPrimeFactor1(600851475143))
var endDate1   = new Date()
var seconds1 = (endDate1.getTime() - startDate1.getTime())
console.log("1st -seconds=", seconds1)

var startDate = new Date()
console.log(largestPrimeFactor1(600851475143))
var endDate   = new Date()
var seconds = (endDate.getTime() - startDate.getTime())
console.log("seconds=", seconds)


// console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(3));
// console.log(largestPrimeFactor(5));
// console.log(largestPrimeFactor(7));
// console.log(largestPrimeFactor(8));
// console.log(largestPrimeFactor(13195));
// console.log(largestPrimeFactor(600851475143));

// Scope for Bettter Solution