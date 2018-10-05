'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let same = true;
  for(let i = 0;i < collection_a.length; i++){
    if(collection_a[i] !== collection_b[i]){
      same = false;
    }
  }
  if(same){
    return true;
  }
}

module.exports = compare_collections;


