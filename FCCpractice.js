/**
 * Created by callie on 5/26/15.
 */
function reverseString(str) {
    var strArray = str.split("");
    var ArrayReverse = strArray.reverse();
    return ArrayReverse.join("");
};

console.log(reverseString('hello'));