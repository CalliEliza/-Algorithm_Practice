/**
 * Created by callie on 5/25/15.
 */


var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
var superSecret = function(string) {
    for (i=0; i<string.length; ++i) {
        for (j=0; j<vowels.length; ++j) {
            if (string.charAt(i) == '\w' && string.charAt(i) !== vowels[i]) {
            }
            string.replace('\w', '\wo\w')
        }
    }
    return string;
};

console.log(superSecret('hello'));























// working function -- show forrest

Robber = {
    letters: 'bcdfghjklmnpqrstvwxz',
    encode: function (s) {
        return s.replace(new RegExp('[' + Robber.letters + ']', 'ig'), function (letter) {
            return letter + 'o' + letter.toLowerCase();
        });
    },
    decode: function (s) {
        return s.replace(new RegExp('([' + Robber.letters + '])o\\1', 'ig'), function (letters) {
            return letters[0];
        });
    }
}

//////
var encoded = message.replace(/([^aeiouåäöAEIOUYÅÄÖ\.\?!\s])/gi, function(match, p1){
    return p1 + "o" + p1.toLowerCase();
});