function largestPrimeFactor(number) {
  if(isNumberPrime(number)){return number;}
  let counter = 2;
  let smallerNumber = number;
  let primeArrayFactors = [];
  while(smallerNumber>counter){
    while(smallerNumber%counter==0){
      if(primeArrayFactors[primeArrayFactors.length-1]!=counter && isNumberPrime(counter)){
        console.log(counter, '-');
        primeArrayFactors.push(counter);
      }
      console.log(counter, '-');
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

console.log(largestPrimeFactor(58));

//
//
//
//
//

function largestPrimeFactor(number) {
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

largestPrimeFactor(58);
