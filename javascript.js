// console.log("console test\n\n")

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
function getHumanChoice() {
  switch (prompt("Make a selection: r, p, or s: ")) {
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




function playGame() {

  let humanScore = 0;
  let compScore = 0;


  function playRound(humanChoice, compChoice) {
    console.log("Computer choice: " + compChoice)
    console.log("Your choice: " + humanChoice)
    if (humanChoice == "rock" && compChoice == "rock") {
      console.log("tie");
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else if (humanChoice == "paper" && compChoice == "paper") {
      console.log("tie");
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else if (humanChoice == "scissor" && compChoice == "scissor") {
      console.log("tie");
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else if (humanChoice == "paper" && compChoice == "rock") {
      console.log("Player gets a point.");
      humanScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else if (humanChoice == "paper" && compChoice == "scissor") {
      console.log("Comp gets a point.");
      compScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
    } else if (humanChoice == "rock" && compChoice == "paper") {
      console.log("Comp gets a point.");
      compScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
    } else if (humanChoice == "rock" && compChoice == "scissor") {
      console.log("Player gets a point.");
      humanScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else if (humanChoice == "scissor" && compChoice == "rock") {
      console.log("Comp gets a point.");
      compScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`)
    } else if (humanChoice == "scissor" && compChoice == "paper") {
      console.log("Player gets a point.");
      humanScore += 1;
      console.log(`Player points: ${humanScore}, Comp points: ${compScore}`);
    } else {
      console.log("Shouldn't be here");
    }
    console.log("\n\n")
  }

  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  if (humanScore == compScore) {
    console.log("\nTie")
  } else if (humanScore >= compScore) {
    console.log("\nYou win")
  } else {
    console.log("\nComputer wins")
  }


}

playGame()
