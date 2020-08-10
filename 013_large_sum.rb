# First Attempt
# function largeSum(arr) {
#   let sum = 0
#   for (let i=0; i<arr.length; i++){
#     sum += parseInt(arr[i].slice(0,11))
#   }
#   return parseInt(sum.toString().slice(0,10))
# }

# // Only change code above this line

# const testNums = [
#   '37107287533902102798797998220837590246510135740250',
#   '46376937677490009712648124896970078050417018260538'
# ];

# console.log(largeSum(testNums));

// _____________________________________________________________

// Example for summing 50 digits, 9*50 = 450 i.e. it can incfluence upto 3 digits
// So we need to get the remainder of next digits
// Think Ahead: 450 + 45 = 495 still a 3 digit number
function largeSum(arr) {
  let sum = 0
  let can_influence = parseInt((9*arr.length).toString().length)
  arr.map((value)=>{
    sum += parseInt(value.slice(0, 10 + can_influence))
  })
  return parseInt(sum.toString().slice(0,10))
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
