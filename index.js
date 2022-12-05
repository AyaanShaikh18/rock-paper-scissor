function getCompChoice() {

    let choice = Math.floor(Math.random() * 3) + 1
    if(choice == 1) {
        return "rock"
    }else if(choice == 2){
        return "scissor"
    }
    return "paper"

}

function playRound(pc, cc) {
    if(pc == "rock" && cc == "rock") {
        console.log("rock");
        return;
    }
    if(pc == "paper" && cc == "paper") {
        console.log("paper");
        return;
    }
    if(pc == "scissor" && cc == "scissor") {
        console.log("scissor");
        return;
    }
    if(pc == "rock" && cc == "scissor"){
        console.log("won rock")
    }else if(pc == "paper" && cc == "rock"){
        console.log("won paper")
    }else if(pc == "scissor" && cc == "paper") {
        console.log("won scissor");
    }else if(pc == "scissor" && cc == "rock") {
        console.log("computer wins")
    }else if(pc == "paper" && cc == "scissor"){
        console.log("comp wins")
    }else if(pc == "rock" && cc == "paper") {
        console.log("comp wins");
    }
    else {
        console.log("default condition");
    }

}

for(let i = 0; i < 10; i++) {
    let playerChoice = (prompt("Enter Your Play: ")).toLowerCase()
let compChoice = getCompChoice()
playRound(playerChoice, compChoice)
}