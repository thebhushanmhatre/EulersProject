// 1st Attempt
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





// Failed Attempt
// function smallestMult(n) {
//   let counter = n
//   let product = n
//   while(counter > 1){
//     if(product % counter !== 0){
//       console.log("counter =", counter,"product =", product)
//       if(Math.round(Math.sqrt(counter))*Math.round(Math.sqrt(counter)) != counter){
//         product *= counter
//       }
//     }
//     counter--
//   }
//   console.log("product =",product)
//   return product
// }

// smallestMult(13);




// New Attempt
function smallestMult(n) {
  let indices = []
  let counter = 2
  while(counter < n + 1){
    indices.push(counter)
    counter++
  }
  let pointer = 0
  while(pointer < indices.length){
    let index = pointer + 1
    while(index < indices.length){
      if(indices[index] % indices[pointer] ==0){
        indices[index] = indices[index] / indices[pointer]
      }
      index++
    }
    pointer++
  }
  let product = indices.reduce((x,y)=>(x*y), 1)
  // console.log("product =", product)
  return product
}

smallestMult(20);
