function primeSummation(n) {
  let sum = 0;
  let primeNos = [];
  for(let i=0; i<n; i++){
    primeNos[i] = 1;
  }
  primeNos[0]=0;
  primeNos[1]=0;
  for(let i=2; i<Math.sqrt(n); i++){
    if(primeNos[i]==1){
      for(let j=2; i*j<n; j++){
        primeNos[i*j]=0;
      }
    }
  }
  for(let i=0; i<n; i++){
    if (primeNos[i]==1) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(primeSummation(17));
