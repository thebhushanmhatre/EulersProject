// 1st Attempt
function sumSquareDifference(n) {
  let sum_of_squares = 0
  let sum = 0
  while(n >= 1){
    sum_of_squares += n*n
    sum += n
    n--
  }
  // console.log("sum =", sum)
  // console.log("sum_of_squares =",sum_of_squares)
  let square_of_sum = sum*sum
  return (square_of_sum-sum_of_squares);
}

sumSquareDifference(10);

// Think of Better Alternative
