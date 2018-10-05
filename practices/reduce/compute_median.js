'use strict';

function compute_median(collection) {
  //在这里写入代码
  let n = collection.length;
    for(let j = 0;j < n; j++){
      for(let i = 0;i < n; i++){
        if(collection[i] < collection[i+1]){
          let item = collection[i];
          collection[i] = collection[i + 1];
          collection[i+1] = item;
        }
      }
    }
  console.log(collection);
    if(n%2 !== 0){
      let median = collection[(n-1)/2] ;
      return median;
    }else{
      let median = (collection[n/2] + collection[n/2 -1])/2;
      return median;
    }
  
}

module.exports = compute_median;


