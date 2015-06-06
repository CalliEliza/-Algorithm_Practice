

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

// 1.9 //
function DrainAct(account, interest, expense) {
    var monthsToZero = 0;
    var yearsToZero = 0;
    if ((account <= 0) || (account < expense) || account < interest) {
        return console.log("Please check the information you entered. A value seems to be invalid");
    }
    else {
        while (account > 0) {
            account = account - (account * interest);
            account = account - expense;
            monthsToZero++;
        }
        yearsToZero = monthsToZero / 12;
        return yearsToZero;
    }
}

// 1.10 //
function SurfaceArea(width,length, height, NumWindows, NumDoors, WinWidth, Winheight, DoorWidth, DoorHeight) {
    var SurfAr = width * length * height;
    var WinArea = NumWindows * Winheight * WinWidth;
    var DoorArea = NumDoors * DoorHeight * DoorWidth;
    var total =  SurfAr - WinArea - DoorArea;
    return total;
}
