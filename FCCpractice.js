/**
 * Created by callie on 5/26/15.
 */
 
 // reverse a string
function reverseString(str) {
    var strArray = str.split("");
    var ArrayReverse = strArray.reverse();
    return ArrayReverse.join("");
};

console.log(reverseString('hello'));

// factorial function
function factorialize(num) {
    var result = num;
    for(i=1;i<num; ++i) {
        result *= i;
    }
    return result;
}

factorialize(5);

// palindromes

function plaindrome(str) {
    var lwrstr = str.toLowerCase();  // ensures all letters on lower case
    var str_Arr = lwrstr.split("");  //turns string into array

    if (str_Arr[0] === str_Arr[str_Arr.length-1]) {  // checks the first and last value to see if equal
        return true;
    }
    else {
        return false;
    }
};
