/**
 * Created by callie on 5/25/15.
 */
var numbers = [1,2,3,4,5,6,7,8,9,10];

var filtered = numbers.filter(function(number) {
    return (number % 2 === 0);
});

var fil = numbers.filter();

console.log(fil);
