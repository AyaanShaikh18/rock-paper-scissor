const container = document.querySelector(".game");
const result = document.querySelector(".result");
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
    let ans;
    if(pc == "rock" && cc == "rock") {
        ans = "rock";
    }else if(pc == "paper" && cc == "paper") {
       ans = "paper";
    }
    else if(pc == "scissor" && cc == "scissor") {
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
    result.textContent = ans;
}
const choosedPlay = (e) => {
    return e.target.textContent;
}

//This is the actual game div
let counter = 1;
// buttons 
// let playerChoice;
const plays = [...document.querySelectorAll(".btn-pl")];
plays.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playGame(e);
        
    })

});
// console.log(playerChoice);

const playGame = (e) => {
    if(counter < 5){
        let playerChoice = choosedPlay(e).toLowerCase();
        let compChoice = getCompChoice();
        playRound(playerChoice, compChoice)
        counter++;
    }else {
        result.textContent = "You Lose Or Won";
    }
}
