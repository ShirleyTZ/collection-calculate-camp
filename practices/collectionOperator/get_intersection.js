'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  const result = [];
  for(let i = 0;i < collection_b.length;i++){
    for(let k = 0;k < collection_a.length;k++){
      if(collection_a[k] === collection_b[i]){
        result.push(collection_b[i]);
      }
    } 
  }
  return result;
}

module.exports = get_intersection;
