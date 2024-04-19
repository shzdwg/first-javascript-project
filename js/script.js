const choices = ["rock","scissors","paper"];

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection) {
        return "TIE";
    } else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "PLAYERWINS";
    } else if (playerSelection=="rock" && computerSelection=="paper"){
        return "CPUWINS";
    } else if (playerSelection=="paper" && computerSelection=="scissors"){
        return "CPUWINS";
    } else if (playerSelection=="paper" && computerSelection=="rock"){
        return "PLAYERWINS";
    } else if (playerSelection=="scissors" && computerSelection=="rock"){
        return "CPUWINS";
    } else if (playerSelection=="scissors" && computerSelection=="paper"){
        return "PLAYERWINS";
    }
  }
  
  function getComputerChoice(){
    return randomElement = choices[Math.floor(Math.random() * choices.length)];
  }

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));