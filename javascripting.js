/**
 * Created by callie on 5/25/15.
 */
 // array filtering function by even #
var numbers = [1,2,3,4,5,6,7,8,9,10];
var even = [];
var filtered = function(array) {
    for (i = 0; i < array.length; ++i) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
    }
    return even;
};



filtered(numbers);

