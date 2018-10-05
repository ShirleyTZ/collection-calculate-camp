'use strict';

function grouping_count(collection) {

  //在这里写入代码
  const newarray = [];
  newarray.push(collection[0]);
  for(let i = 0;i < collection.length;i++){
    let only;
    for(let j = 0;j < newarray.length;j++){
      if(collection[i] !== newarray[j]){
        only = true;
      }else{
        only = false;
      }
    }
    if(only === true){
      newarray.push(collection[i]);
    }
  }

  const result = {};
  for(let i = 0;i < newarray.length;i++){
    let num = 0;
    for(let j = 0; j < collection.length;j++){
      if(newarray[i] === collection[j]){
        num++;
      }
    }
    result[newarray[i]] = num;
  }
  return result;
}

module.exports = grouping_count;
