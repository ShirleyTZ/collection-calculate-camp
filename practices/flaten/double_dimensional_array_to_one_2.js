'use strict';

function double_to_one(collection) {

  //在这里写入代码
  const newarray = [];
  for(let i = 0; i < collection.length; i++){
      for(let j = 0; j < collection[i].length;j++){
        chooseonly(collection[i][j]);
      }
  }
  
  function chooseonly(item){
    let only = true;
    for(let k = 0; k < newarray.length;k++){
      if(item === newarray[k]){
        only = false;
      }
    }
    if(only){
      newarray.push(item);
    } 
  }
  return newarray;
}

  
        

module.exports = double_to_one;
