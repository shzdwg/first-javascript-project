const choices = ["rock","scissors","paper"];

function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log(playerSelection,computerSelection);

    if (playerSelection == computerSelection) {
        return 1;
    } else if (playerSelection=="rock" && computerSelection=="scissors"){
        return 0;
    } else if (playerSelection=="rock" && computerSelection=="paper"){
        return 2;
    } else if (playerSelection=="paper" && computerSelection=="scissors"){
        return 2;
    } else if (playerSelection=="paper" && computerSelection=="rock"){
        return 0;
    } else if (playerSelection=="scissors" && computerSelection=="rock"){
        return 2;
    } else if (playerSelection=="scissors" && computerSelection=="paper"){
        return 0;
    }
  }
  
  function getComputerChoice(){
    return randomElement = choices[Math.floor(Math.random() * choices.length)];
  }

  function playGame(){
    const playerSelection = "roCK";
    let playerWins=0;
    let computerWins=0;
    let roundResult;

    for (let i=0;i<5;i++){
        let playerSelection = prompt("rock, scissors or paper?");
        const computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection.toLowerCase(), computerSelection);
        if (roundResult==0){
            playerWins++;
        } else if (roundResult==2){
            computerWins++;
        }
    }

    console.log("playerWins:" + playerWins + " computerWins:" + computerWins);
  }
  
  //playGame()