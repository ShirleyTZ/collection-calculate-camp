'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  const result = [];
  for(let n = 0;n < collection_a.length;n++){
    result.push(collection_a[n]);
  }

  for(let n = 0;n < collection_b.length;n++){
    let onlyone = true;
    for(let i = 0;i < collection_a.length;i++){
      if(collection_a[i] === collection_b[n]){
        onlyone = false;
      }
    }
    if(onlyone === true){
      result.push(collection_b[n]);
    }
  }
  return result;
}

module.exports = get_union;

