// 1st Attempt - O(n)
// function multiplesOf3and5(number) {
//   let sum = 0
//   let counter = number - 1
//   while(counter > 0){
//     if(counter % 3 == 0 || counter % 5 == 0 ){
//       sum += counter
//     }
//     counter--
//   }
//   return sum;
// }

// console.log(multiplesOf3and5(1000))


// 2nd Attempt - O(n)

function multiplesOf3and5(number) {
  let max_5 = Math.floor((number-1) / 5)
  let max_3 = Math.floor((number-1) / 3)

  var multiples_set = new Set()
  
  while(max_3 > 0){
    multiples_set.add(3*max_3)
    max_3--
  }
  
  while(max_5 > 0){
    multiples_set.add(5*max_5)
    max_5--
  }

  let sum = 0
  for (let item of multiples_set.values()){
    sum += item
  }

  return sum;
}

console.log(multiplesOf3and5(1000))
