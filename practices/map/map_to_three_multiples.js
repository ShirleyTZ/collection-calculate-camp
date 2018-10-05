'use strict';
var map_to_three_multiples = function(collections){
  const result = [];
  for(let i = 0; i < collections.length; i++){
    let item = collections[i]*3;
    result.push(item);
  }
  return result;
};

module.exports = map_to_three_multiples;
