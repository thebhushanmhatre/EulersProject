function fiboEvenSum(n) {
  let fib_nums = [1, 2]
  while(fib_nums[fib_nums.length-1] + fib_nums[fib_nums.length-2] < n){
    fib_nums.push(fib_nums[fib_nums.length-1] + fib_nums[fib_nums.length-2])
  }
  let even_sum = 0
  for (var i = 0; i < fib_nums.length; i++) {
    if(fib_nums[i] % 2 === 0){
      even_sum += fib_nums[i]
    }
  }
  return even_sum
}

fiboEvenSum(10);