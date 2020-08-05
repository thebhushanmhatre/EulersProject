// Inefficient Way - Unable to Pass Tests
// function divisibleTriangleNumber(n) {
//   let triNum_NumOfFactorshash = {};
//   triNum_NumOfFactorshash[1] = 1;
//   let counter = 2;
//   let factorsCount = 1;
//   let key = 1;
//   while(factorsCount < n){
//     key = counter*(counter+1)*0.5;
//     triNum_NumOfFactorshash[key] = numberOfFactors(key);
//     factorsCount = triNum_NumOfFactorshash[key];
//     counter++;
//   }
//   return key;
// }

// function numberOfFactors(num){
//   let counter = 2;
//   let count = 2; // 1 and number itself
//   while(counter<num){
//     if(num%counter==0){
//       count++;
//     }
//     counter++;
//   }
//   return count;
// }

// divisibleTriangleNumber(5);

const FACTORS_HASH = {"1": [1]};

function divisibleTriangleNumber(n) {
  let triNum_NumOfFactorshash = {};
  triNum_NumOfFactorshash[1] = 1;
  let counter = 2;
  let factorsCount = 1;
  let key = 1;
  while(factorsCount < n){
    key = counter*(counter+1)*0.5;
    triNum_NumOfFactorshash[key] = numberOfFactors(key);
    factorsCount = triNum_NumOfFactorshash[key].length;
    counter++;
    console.log("FACTORS_HASH:"+JSON.stringify(FACTORS_HASH));
  }
  return key;
}

function numberOfFactors(num){
  if(FACTORS_HASH[num]){
    return FACTORS_HASH[num]
  }
  return factorsHash(num);
}

function factorsHash(num){
  let counter = num-1;
  let factorsArray = [];
  factorsArray.push(1);
  factorsArray.push(num);
  // if(FACTORS_HASH[num]){
  //     console.log("in here");
  //     return
  //   }
  while(counter>1){
    if(num%counter==0){
      factorsArray.push(counter);
    }
    counter--;
  }
  FACTORS_HASH[num] = factorsArray;
  return factorsArray;
}

console.log(divisibleTriangleNumber(5));

