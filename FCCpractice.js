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
