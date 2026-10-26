
let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game Was Draw!";
}

const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin){
        useScore++;
        userScorePare.innerText = useScore;
        msg.style.backgroundColor = "#008000";
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "#FF0000"; // Hex
        msg.innerText = `You Lost your ${compChoice} beats your ${userChoice}`;
    }

}

const playGame = (userChoice) => {
    // user choice = userChoice
    // computer choice -> 
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // user win if comp select scissors
            userWin = compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            // computer may chose rock or scissor
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // computer may choode rock or papper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

