'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let result;
  let string = "abcdefghijklmnopqrstuvwxyz";
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    num = num + collection[i];
  }
  result = Math.ceil(num/collection.length)-1;
  return string[result];
}

module.exports = average_to_letter;

