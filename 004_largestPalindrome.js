// 1st Attempt
function largestPalindromeProduct1(n) {
  let counter = n
  let highestDigitNumber = "9"
  while(counter > 1){
    highestDigitNumber = highestDigitNumber + "9"
    counter--
  }
  // console.log("highest n Digit Number = ", highestDigitNumber)

  highestDigitNumber = parseInt(highestDigitNumber)
  let firstNumber = highestDigitNumber
  let secondNumber = highestDigitNumber
  counter = 100
  let numLoop = 0
  while(counter > 1){
    numLoop++
    // console.log(firstNumber, "<->", secondNumber)
    let product = firstNumber*secondNumber
    if(isPalindrome1(product)){
      // console.log("numLoop:", numLoop)
      return product
    }
    secondNumber--
    counter--
    if (counter == 1){
      secondNumber = firstNumber
      firstNumber--
      counter = 100
    }
  }
}

function isPalindrome1(string){
  let arrayToBeChecked = String(string).split("")
  while(arrayToBeChecked.length > 1){
    if(arrayToBeChecked.pop()!=arrayToBeChecked.shift()){
      return false
    }
  }
  return true
}

// console.log(largestPalindromeProduct(3))


// 2nd Attempt

function largestPalindromeProduct(n) {
  let largest_string = "9"
  while(n>1){
    largest_string += "9"
    n--
  }
  let counter = largest_string*largest_string

  while(counter > 1){
    if(isPalindrome(counter.toString())){
      let countdown = parseInt(largest_string)
      while(countdown > 1){
        if(counter % countdown === 0 && (counter / countdown) <= largest_string){
          // console.log(counter / countdown, " - ", countdown)
          return counter
        }
        countdown--
      }
    }
    counter--
  }
}

function isPalindrome(string){
  let array = string.split("")
  while(array.length > 1){
    if(array.shift() !== array.pop()){
      return false
    }
  }
  return true
}

// console.log(largestPalindromeProduct(2));

var startDate1 = new Date()
console.log(largestPalindromeProduct1(5))
var endDate1   = new Date()
var seconds1 = (endDate1.getTime() - startDate1.getTime())
console.log("Old seconds=", seconds1)

var startDate = new Date()
console.log(largestPalindromeProduct(5))
var endDate   = new Date()
var seconds = (endDate.getTime() - startDate.getTime())
console.log("seconds=", seconds)

// 1st Attempt is faster
// Both of these better than given solution on fcc :)
// Try thinking better
