console.log("console test\n\n")
let compChoice = "";
let humanChoice = "";
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

console.log("Computer choice: " + getComputerChoice())
getHumanChoice()
console.log("Your choice: " + getHumanChoice())
