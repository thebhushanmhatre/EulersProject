// First Attempt: O(n*n)
function specialPythagoreanTriplet(n) {
//  let sumOfabc = n;
 let products = []
 let a = 1
 let b = a + 1
 let c = n - a - b
 while(a < c){
   while(b < c){
    //  console.log(`a=${a}, b=${b}, c=${c}`)
     if(a*a + b*b === c*c){
       return a*b*c
      //  products.push(a*b*c)
     }
     b++
     c = n - a - b
   }
   a++
   b = a + 1
   c = n - a - b
 }
//  return products[0];
}

console.log(specialPythagoreanTriplet(1000));
