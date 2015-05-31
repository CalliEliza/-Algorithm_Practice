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


function findLongestWord(str) {
   var strArray = str.split(" ");  //splits string into an array of strings
   var longest = 0;  
   var word = null;
   for (i = 0; i < strArray.length; ++i) { //loops through string
       if (strArray[i].length > longest) {  //looks for the length of each string and compares it to the previous
           word = strArray[i];    // sets the new value of word and longest
           longest = strArray[i].length;
       }
   }
    return word;
}


// return string with first letter capitalized
function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


// check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
    var strArr = str.split(" ");
    var ArrLenth = strArr.length;
    if (str.substr(-1) == target || strArr[ArrLenth -1] == target) {
        return true;
    }
}

// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
var empty = "";
var repstring = "";
function repeat(str, num) {
    if (num > 0) {
        for (i = 0; i < num; ++i) {
            repstring += str;
        }
    }
    else {
        return empty;
    }
    return repstring;
}
