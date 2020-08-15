// First Attempt

function powerDigitSum(exponent) {
  let product = BigInt(2)
  let counter = 1
  while(counter < exponent){
    product *= BigInt(2)
    counter++
    // console.log(counter, ' - ', product)
  }
  let product_string = String(product).split('')
  // console.log(product_string)
  let sum = 0
  product_string.map((alphabet) => {
    sum += Number(alphabet)
  })
  // console.log(sum)
  return sum;
}

powerDigitSum(128);

// JS not able to handle more than 21 digit number using normal Integer
// So Use BigInt()
