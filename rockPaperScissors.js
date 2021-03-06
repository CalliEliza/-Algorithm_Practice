
// Game built for python course, wanted to also try to build in javascript
// 0 - rock
// 1 - Spock
// 2 - paper
// 3 - lizard
// 4 - scissors

//converts name to number
function name_to_number(name) {
    var number = 0;
    switch (name) {
        case "rock":
            return number;
            break;
        case "Spock":
            return number = 1;
            break;
        case "paper":
            return number = 2;
            break;
        case "lizard":
            return number = 3;
            break;
        case "scissors":
            return number = 4;
            break;
        default:
            console.log("I'm sorry, there seems to be some sort of error.");
    }
}

//converts number to name
function number_to_name(number) {

    switch (number) {
        case 0:
            return "rock";
            break;
        case 1:
            return "Spock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "lizard";
            break;
        case 4:
            return "scissors";
            break;
        default:
            console.log("I'm sorry, there seems to be some sort of error.");
    }
}


//computes computer_choice, takes players choice and determines winner
function  rpsls(player_choice) {
    // computer's number, random
    computer_num = Math.round(Math.random(0,5));

// converts player's choice into a number
    player_num = name_to_number(player_choice);

// converts computer's number to choice
    comp_choice = number_to_name(computer_num);

// computes diff between comp and play and divides by modulo 5
    dif_player_comp = (computer_num - player_num) % 5;

// set winner variable
    var winner;
    if (dif_player_comp < 0 ) {
        dif_player_comp = dif_player_comp * -1;
    }
    if ( dif_player_comp === 1 || dif_player_comp === 2) {
         winner = comp_choice;
        return console.log("The winner is " +winner+ ".");
    }
    else if (dif_player_comp === 3 || dif_player_comp === 4) {
        winner = player_choice;
        return console.log("The winner is " +winner+ ".");
    }
    else if  (comp_choice === player_choice) {
        return console.log("It's a tie!");
    }
}


console.log(rpsls());
