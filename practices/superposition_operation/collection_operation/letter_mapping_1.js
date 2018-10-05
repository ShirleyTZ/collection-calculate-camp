'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let result = [];
  let string = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0; i < collection.length; i++){
    if(collection[i]%2 == 0){
      let word = string[collection[i]-1];
      result.push(word);
    }
  }
  return result;
}

module.exports = even_to_letter;
