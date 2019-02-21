var numbers = [1, 2, 2, 2, 3, 4];

//for this interview questions I was asked to code and find the most common occuring integer in the array

//My Answer
var findCommonInt = function(){

  var num1= 0;
  var num2= 0;
  var num3= 0;
  var num4= 0;
  
  for (var i=0; i < numbers.length; i++){
 
    if (numbers[i] == 1){
        num1++;
    }
    if (numbers[i] == 2){
        num2++;
    }
     if (numbers[i] == 3){
        num3++;
    }
     if (numbers[i] == 4){
        num4++;
    }
    //{1: 1, 2: 3, 3:1, 4:1}
  }

//cleaned up after the interview
var myresults = [num1, num2, num3, num4];
return myresults;  
}
console.log(findCommonInt());


//A Better Optimized Answer
function getCommonInt(array)
{
  //empty array for result
  var results = { };
  for (var i = 0; i < array.length; i++) {

    //assigns the array index to the results array appropiately
    //when an indexed array is repeated the value is increased by 1
    results[array[i]] = (results[array[i]] || 0) + 1;
  }
  return results;
}
console.log(getCommonInt(numbers));
