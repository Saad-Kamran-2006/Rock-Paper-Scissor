const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
let user_Score = 0;
let comp_Score = 0;
const genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = () => {
    msg.style.backgroundColor = "orange";
    msg.innerText = "Game was Draw";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        user_Score++;
        userScore.innerText = user_Score;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comp_Score++;
        compScore.innerText = comp_Score;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    ;
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }
        else if (userChoice === "Scissor") {
            userWin = compChoice === "Rock" ? false : true;
        }
        ;
        showWinner(userWin, userChoice, compChoice);
    }
    ;
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const resetGame = () => {
    user_Score = 0;
    comp_Score = 0;
    userScore.innerText = "0";
    compScore.innerText = "0";
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
};
resetBtn.addEventListener("click", resetGame);
