let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userwins = document.querySelector("#user-score")
const compwins = document.querySelector("#comp-score")

const genCompChoice = ()=> {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor( Math.random()*3);
    return options[randomIndex];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const drawGame = () => {
    console.log("Game was draw")
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        console.log("You won!");
        userScore++;
        userwins.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lost");
        compScore++;
        compwins.innerText = compScore;
        msg.innerText = `You lost. Computer's ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = " #ec0000";
        
    }
}

const playGame = (userChoice)=> {
    console.log("user choice = ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false: true;
        }
        else {
            userwin = compChoice === "rock" ? false: true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

}



choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
