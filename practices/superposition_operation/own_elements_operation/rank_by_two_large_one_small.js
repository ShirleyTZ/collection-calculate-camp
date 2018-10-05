'use strict';
function rank_by_two_large_one_small(collection){
  for(let i = 0; i < collection.length; i++){
    for(let j = 0; j < collection.length;j++){
      if(collection[i] < collection[j]){
        let item = collection[i];
        collection[i] = collection[j];
        collection[j] = item;
      }
    }
  }
  for(let i = 0; i < collection.length-2;i = i + 3){
    let item = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = item;
  }
  return collection;
  //这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
