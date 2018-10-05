'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let result;
  let num;
  let index;
  if(collection.length%2 === 0){
    index = collection.length/2-1;
    num = (collection[index] +collection[index + 1])/2;
  }else{
    index = (collection.length - 1)/2;
    num = collection[index];
  }
  result = translateNumberToLetter(Math.ceil(num));
  return result;
}

function translateNumberToLetter(number){
  let result="";
  let num = number;
  const name ="abcdefghijklmnopqrstuvwxyz";
  while(num !== 0){
    if(num%26 === 0){
      result = "z" + result;
      num = num - 1;
    }else{
      result = name[num%26-1] + result;
    }
    num = parseInt(num/26);
  }
  return result;
}

module.exports = median_to_letter;
