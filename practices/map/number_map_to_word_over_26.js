'use strict';
var number_map_to_word_over_26 = function(collection){
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
  const newarray = [];
  for(let i = 0;i < collection.length; i++){
    let item = translateNumberToLetter(collection[i]);
    newarray.push(item);
  }
  return newarray;
};

module.exports = number_map_to_word_over_26;
