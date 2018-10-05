'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let collectionArray = collection.split("->").map(Number);3
  let n = collectionArray.length;
  for(let j = 0;j < n; j++){
    for(let i = 0;i < n; i++){
      if(collectionArray[i] < collectionArray[i+1]){
        let item = collectionArray[i];
        collectionArray[i] = collectionArray[i + 1];
        collectionArray[i+1] = item;
      }
    }
  }
  if(n%2 !== 0){
    let median = collectionArray[(n-1)/2] ;
    return median;
  }else{
    let median = (collectionArray[n/2] + collectionArray[n/2 -1])/2;
    return median;
  }
}

module.exports = compute_chain_median;
