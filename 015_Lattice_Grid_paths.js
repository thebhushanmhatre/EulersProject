// First Attempt
function latticePaths(gridSize) {
  // This same as arranging n R's and n D's
  // where n = gridSize
  // (2*n)! / (n!)^2
  // (when n=2) => 4*3*2/(2^2) = 6
  let numerator = 2*gridSize
  let denominator = gridSize
  let answer = 1
  while(numerator > gridSize){
    answer *= numerator
    numerator--
  }
  while(denominator > 1){
    answer = answer / denominator
    denominator--
  }
  // console.log(parseInt(answer))
  return parseInt(answer);
}

latticePaths(20);
