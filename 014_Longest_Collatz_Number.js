// First Attempt: O(n2)
function longestCollatzSequence(limit) {
  let start_number = limit
  let max_chain = []
  let max_chain_number = limit
  while(start_number > 0){
    let variable = start_number
    let nums = [variable]
    while(variable !== 1 ){
      if(variable % 2 === 0){
        variable = variable / 2
      } else {
        variable = 3*variable + 1
      }
      nums.push(variable)
    }
    if(nums.length > max_chain.length){
      max_chain = nums
      max_chain_number = start_number
    }
    // console.log(max_chain_number)
    start_number--
  }
  // console.log(max_chain)
  return max_chain_number
}

longestCollatzSequence(14);
