//! Print pyramid
//     *
//    ***
//   *****
//  *******
// *********
//! Print this pattern.
const pyramid = n =>{
    for(let i = 1; i <=n; i++){
        console.log(' '.repeat(n-i) + '*'.repeat( 2 * i - 1))
    }
};
console.log(pyramid(5));



//! How to calculate twon numbers without using any arethmetic operator.
function additionOfTwoNumbers(a,b){
    for(i = 1; i <= b; i++){
        a++;
    }
    return a;
}
console.log(additionOfTwoNumbers(50,30));



//! multiplication, subtraction, division without using any arithmetic operator.
function subtractionOfTwoNumbers(a,b){
    for(i = 1; i <= b; i++){
        a--;
    }
    return a;
}
console.log(subtractionOfTwoNumbers(-20,-30));

function multiplicationOfTwoNumbers(a,b){
    let result = 0;
    for(i=1; i<=b; i++){
        result += a;
    }
    return result;
}
console.log(multiplicationOfTwoNumbers(10,20));//This code can be updated for the values that are negative and if both the values are negative also.

function divisionOfTwoNumbers(a,b){
    let result = 0;
    for(;a >= b; result++){
        a -= b;
    }
    return parseFloat(result);
}
console.log(divisionOfTwoNumbers(20,10));//This code can be updated for decimal values in the result as well as to handle the negative values also.