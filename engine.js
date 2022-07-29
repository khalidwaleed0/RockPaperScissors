const actions = ['rock', 'paper', 'scissors'];
let playerWins = computerWins = 0;
let playerSelection;
game();

function game()
{
  while(playerWins != 5 && computerWins != 5)
  {
    do{
      playerSelection = prompt('Type your choice : (rock - paper - scissors)');
      playerSelection = playerSelection.toLowerCase().trim();
    }while(!actions.includes(playerSelection));
    console.log(playRound());
    console.log(`Computer: ${computerWins}  Player: ${playerWins}`);
  }
}

function playRound()
{
  let computerSelection = getComputerChoice();
  if((playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'rock') ||
  (playerSelection === 'scissors' && computerSelection === 'paper'))
  {
    playerWins++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else if(playerSelection === computerSelection)
  {
    return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
  }
  else
  {
    computerWins++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getComputerChoice()
{
  return actions[Math.floor(Math.random()*3)]
}