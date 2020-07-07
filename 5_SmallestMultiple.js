function smallestMult(n) {
  let counter = 3;
  let answer = 2;
  while(counter <= n){
    if(answer%counter!=0){
      if(isPrime(counter)){
        answer = answer*counter;
      }
      if(root(counter)){
        answer = answer*root(counter);
      }
    }
    console.log("counter:", counter, "  prime:",isPrime(counter),"  root:",root(counter), "  answer:",answer);
    counter++;
  }
  return answer;
}

function root(num){
  let squareRoot = parseInt(Math.sqrt(num));
  let squareOfNumber = squareRoot*squareRoot;
  if (num===squareOfNumber){
    if (isPrime(squareRoot)){
      return squareRoot;
    }else{
      root(squareRoot);
    }
  }
  let cubeRoot = parseInt(Math.pow(num, 1/3));
  let cubeOfNumber = cubeRoot*cubeRoot*cubeRoot;
  if (num===cubeOfNumber){
    if (isPrime(cubeRoot)){
      return cubeRoot;
    }else{
      root(cubeRoot);
    }
  }
  let fourthRoot = parseInt(Math.pow(num, 1/4));
  let fourthOfNumber = fourthRoot*fourthRoot*fourthRoot*fourthRoot;
  if (num===fourthOfNumber){
    if (isPrime(fourthRoot)){
      return fourthRoot;
    }else{
      root(fourthRoot);
    }
  }
  let fifthRoot = parseInt(Math.pow(num, 1/5));
  let fifthOfNumber = fifthRoot*fifthRoot*fifthRoot*fifthRoot*fifthRoot;
  if (num===fifthOfNumber){
    return fifthRoot;
  }
  return false;
}

function isPrime(number){
  if(number==2){return true;}
  let counter = 2;
  let maxIteration = parseInt(number/2 +1);
  while(counter <= maxIteration){
    if(number%counter==0) {return false;}
    counter++;
  }
  return true;
}

console.log(smallestMult(20));
