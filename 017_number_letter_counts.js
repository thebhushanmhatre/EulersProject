const number_word_hash = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety",
    100 : "hundred",
    1000: "thousand"
  }
function numberLetterCounts(limit) {
  let lengthy_sum = 0
  let counter = 1
  while(counter <= Math.min(limit, 20)){
    lengthy_sum += number_word_hash[counter].length
    counter++
  }
  
  if (limit <= 20){
    return lengthy_sum
  } else {
    while(counter <= limit){
      number_word_hash[counter] = getLetters(counter)
      lengthy_sum += number_word_hash[counter].length
      counter++
    }
  }
  if(limit >= 100){
    lengthy_sum += 3 // Adding "one" for 1 hundred
  }
  if(limit >= 1000){
    lengthy_sum += 3 // Adding "one" for 1 thousand
  }

  // console.log(lengthy_sum)
  // console.log(number_word_hash)
  return lengthy_sum;
}

function getLetters(number){
  if(number_word_hash[number]){
    return number_word_hash[number]
  } else if(number < 30 && number > 20){
    return number_word_hash[20] + getLetters(number % 20)
  } else if(number < 40 && number > 30){
    return number_word_hash[30] + getLetters(number % 30)
  } else if(number < 50 && number > 40){
    return number_word_hash[40] + getLetters(number % 40)
  } else if(number < 60 && number > 50){
    return number_word_hash[50] + getLetters(number % 50)
  } else if(number < 70 && number > 60){
    return number_word_hash[60] + getLetters(number % 60)
  } else if(number < 80 && number > 70){
    return number_word_hash[70] + getLetters(number % 70)
  } else if(number < 90 && number > 80){
    return number_word_hash[80] + getLetters(number % 80)
  } else if(number < 100 && number > 90){
    return number_word_hash[90] + getLetters(number % 90)
  } else if(number < 1000 && number > 100){
    let start_word = ""
    start_word = number_word_hash[String(number)[0]]
    let end_word = ""
    if(number % 100 > 0){
      end_word = "and" + getLetters(number % 100)
    }
    return start_word + number_word_hash[100] + end_word
  } else if(number < 10000 && number > 1000){
    let start_word = ""
    start_word = number_word_hash[String(number)[0]]
    let end_word = ""
    if(number % 1000 > 0){
      end_word = getLetters(number % 1000)
    }
    return start_word + number_word_hash[100] + end_word
  }
}

console.log(numberLetterCounts(1000));
