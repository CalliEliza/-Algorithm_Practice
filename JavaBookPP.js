

// 1.8 // 
function DrainAccount() {
    var monthsToZero = 0;
    var account = 10000;
    var interest = .005;
    var collegeExp = 500;
    while (account > 0) {
        account = account - (account * interest);
        account = account - collegeExp;
        monthsToZero++;
    }
    return monthsToZero;
}
