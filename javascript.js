// console.log("console test\n\n")

let roundInt = 1;
let humanScore = 0;
let compScore = 0;
// Pseudocode

// FUNCTION getComputerChoice
function getComputerChoice() {
  // use math.random to select number between 0 and 1
  let compSelector = Math.random()
  if (compSelector <= 0.2) {
    return compChoice = "rock";
    // if 0 - 0.2 then rock
  } else if (compSelector >= 0.3 && compSelector <= 0.5) {
    return compChoice = "paper";
    // if 0.3 - 0.5 then paper
  } else if (compSelector >= 0.6 && compSelector <= 0.8) {
    return compChoice = "scissor";
    // if 0.6 - 0.8 then scissor
  } else {
    return getComputerChoice()
    // call function recursively to give an equal chance for options
  }
}
// FUNCTION END

// FUNCTION getHumanChoice
function getHumanChoice(c) {
  switch (c) {
    case "r":
      return humanChoice = "rock";
    case "p":
      return humanChoice = "paper";
    case "s":
      return humanChoice = "scissor";
    default:
      console.log("Invalid input. Try again.")
      return getHumanChoice()
  }
}

const match = document.querySelector(".match")
const uScore = document.querySelector(".uscore")
const cScore = document.querySelector(".cscore")
const round = document.querySelector(".round")
const winner = document.querySelector(".winner")

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playRound(getHumanChoice("r"), getComputerChoice())
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound(getHumanChoice("p"), getComputerChoice())
});
const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener("click", () => {
  playRound(getHumanChoice("s"), getComputerChoice())
});

uScore.textContent = `Your score is: ${humanScore}`;
cScore.textContent = `Comp score is: ${compScore}`;
round.textContent = `round ${roundInt}`;

function playRound(humanChoice, compChoice) {

  console.log("Computer choice: " + compChoice)
  console.log("Your choice: " + humanChoice)
  if (humanChoice == "rock" && compChoice == "rock") {
    console.log("tie");
    match.textContent = "Tie"
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else if (humanChoice == "paper" && compChoice == "paper") {
    console.log("tie");
    match.textContent = "Tie"
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else if (humanChoice == "scissor" && compChoice == "scissor") {
    console.log("tie");
    match.textContent = "Tie"
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else if (humanChoice == "paper" && compChoice == "rock") {
    console.log("Player gets a point.");
    match.textContent = "Player gets a point";
    humanScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else if (humanChoice == "paper" && compChoice == "scissor") {
    console.log("Comp gets a point.");
    match.textContent = "Comp gets a point";
    compScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
  } else if (humanChoice == "rock" && compChoice == "paper") {
    console.log("Comp gets a point.");
    match.textContent = "Comp gets a point";
    compScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
  } else if (humanChoice == "rock" && compChoice == "scissor") {
    console.log("Player gets a point.");
    match.textContent = "Player gets a point";
    humanScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else if (humanChoice == "scissor" && compChoice == "rock") {
    console.log("Comp gets a point.");
    match.textContent = "Comp gets a point";
    compScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
  } else if (humanChoice == "scissor" && compChoice == "paper") {
    console.log("Player gets a point.");
    match.textContent = "Player gets a point";
    humanScore += 1;
    console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
  } else {
    console.log("Shouldn't be here");
    console.log(humanChoice, compChoice);
  }
  roundInt += 1;
  round.textContent = `round ${roundInt}`;
  uScore.textContent = `Your score is: ${humanScore} \n Your choice was ${humanChoice}`;
  cScore.textContent = `Comp score is: ${compScore} \n Your choice was: ${compChoice}`;
  if (roundInt == 5) {
    round.textContent = '';
    if (humanScore == compScore) {
      console.log("\nTie")
      winner.textContent = "Tie";
    } else if (humanScore >= compScore) {
      console.log("\nYou win")
      winner.textContent = "You win the game";
    } else {
      console.log("\nComputer wins")
      winner.textContent = "Comp wins the game";
    }
  } else {
    console.log("\n\n")
  }
}
