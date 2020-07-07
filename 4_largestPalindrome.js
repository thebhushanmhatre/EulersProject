function largestPalindromeProduct(n) {
  let counter = n;
  let highestDigitNumber = "9";
  while(counter > 1){
    highestDigitNumber = highestDigitNumber + "9";
    counter--;
  }
  highestDigitNumber = parseInt(highestDigitNumber);
  let firstNumber = highestDigitNumber;
  let secondNumber = highestDigitNumber;
  counter = 100;
  let numLoop = 0
  while(counter > 1){
    numLoop++;
    console.log(firstNumber, "<->", secondNumber);
    let product = firstNumber*secondNumber;
    if(isPalindrome(product)){
      console.log("numLoop:", numLoop);
      return product;
    }
    secondNumber--;
    counter--;
    if (counter == 1){
      secondNumber = firstNumber;
      firstNumber--;
      counter = 100;
    }
  }
}

function isPalindrome(string){
  let arrayToBeChecked = String(string).split("");
  while(arrayToBeChecked.length > 1){
    if(arrayToBeChecked.pop()!=arrayToBeChecked.shift()){
      return false;
    }
  }
  return true;
}

console.log(largestPalindromeProduct(3));
