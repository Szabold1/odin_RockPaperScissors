let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll("button"));
const text = document.querySelector(".text");
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  let playerChoiceCapitalized =
    playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
  let computerChoiceCapitalized =
    computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    if (playerScore === 5) {
      text.textContent = `End of the game! You are the winner!`;
      buttons.forEach((button) => (button.disabled = true));
    } else {
      text.textContent = `You win! ${playerChoiceCapitalized} beats ${computerChoiceCapitalized}.`;
    }
  } else if (playerChoice === computerChoice) {
    text.textContent = `It's a tie! You both chose ${playerChoiceCapitalized}.`;
  } else {
    computerScore++;
    if (computerScore === 5) {
      text.textContent = `End of the game! You lost!`;
      buttons.forEach((button) => (button.disabled = true));
    } else {
      text.textContent = `You lose! ${computerChoiceCapitalized} beats ${playerChoiceCapitalized}.`;
    }
  }
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  console.log(playerScore, computerScore);
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
