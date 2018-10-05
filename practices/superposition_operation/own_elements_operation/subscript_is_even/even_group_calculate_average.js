'use strict';
var even_group_calculate_average = function(collection){
    let result = [];
    for(let i = 0; i < collection.length; i++){
        if((i+1)%2 === 0){
            if(collection[i]%2 === 0){
                result.push(collection[i]);
            }
        }
    }

    let group1=[];
    let group2=[];
    let group3=[];
    for(let j = 0;j < result.length; j++){
        if(result[j] > 99){
            group3.push(result[j]);
        }else if(result[j] > 9){
            group2.push(result[j]);
        }else{
            group1.push(result[j]);
        }
    }
    function addNumber(group){
        let num = 0;
        for(let i = 0;i < group.length; i++){
            num = num + group[i];
        }
        return num/group.length;
    }

    let average =[];
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    if(result.length === 0){
        average.push(0);
    }else if(group1.length ===0 && group2.length ===0){
        num3 = addNumber(group3);
        average.push(num3);
    }else if(group1.length !== 0 && group2.length !== 0 && group3.length !== 0){
        num1 = addNumber(group1);
        average.push(num1);
        num2 = addNumber(group2);
        average.push(num2);
        num3 = addNumber(group3);
        average.push(num3);
    }
    return average;
};
module.exports = even_group_calculate_average;
