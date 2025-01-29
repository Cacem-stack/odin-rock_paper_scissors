console.log("console test\n\n")
let compChoice = "";
// Pseudocode

// FUNCTION getComputerChoice
function getComputerChoice() {
  // use math.random to select number between 0 and 1
  let compSelector = math.random()
  if (compSelector <== 0.3) {
    compChoice = "rock";
    // if 0 - 0.3 then rock
  } else if (compSelector >== 0.4 && compSelector <== 0.6) {
    compChoice = "paper";
    // if 0.4 - 0.6 then paper
  } else {
    compChoice = "scissor";
    // if 0.7 - 1 then scissor
  }
}

console.log(compChoice)
// FUNCTION END
