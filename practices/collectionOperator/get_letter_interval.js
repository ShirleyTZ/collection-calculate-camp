'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result=[];
  if(number_a < number_b){
    for(let i = number_a;i <= number_b;i++){
      let letter = translateNumberToLetter(i);
      result.push(letter);
    }
  }else{
    for(let i = number_a;i >= number_b;i--){
      let letter = translateNumberToLetter(i);
      result.push(letter);
    }
  }
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

module.exports = get_letter_interval;
