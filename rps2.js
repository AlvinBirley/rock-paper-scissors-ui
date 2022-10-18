let playerScore = 0
let compScore = 0
let x = playerScore
let y = compScore


document.getElementById('rock').onclick = function(e){
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

}

document.getElementById('paper').onclick = function(e){
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

document.getElementById('scissors').onclick = function(e){
    playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
let playerSelection = ''

//const rock = document.querySelector('#rock');
//rock.onclick = () => {return 'rock'}; 

//const paper = document.querySelector('#paper');
//paper.onclick = () => {return 'paper'};

//const scissors = document.querySelector('#scissors');
//scissors.onclick = () => {return 'scissors'};

const compChoice = ['rock', 'paper', 'scissors']
function getComputerChoice()
{ 
return compChoice[Math.floor(Math.random()*compChoice.length)];

}

function playRound(playerSelection, computerSelection){

   if (playerSelection == "rock" && computerSelection== "rock"){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Rock vs rock. Tie game';
    score.appendChild(content);
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Paper covers rock. You lose!';
        score.appendChild(content);
        compScore++
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Rock breaks scissors. You win!';
        score.appendChild(content);
   playerScore++
   }else if (playerSelection == "paper" && computerSelection == "paper"){ 
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Paper vs paper! Tie';
    score.appendChild(content);
    }else if (playerSelection == "paper" && computerSelection== "rock"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Paper covers rock. You win!';
        score.appendChild(content);
   playerScore++
}else if (playerSelection == "paper" && computerSelection== "scissors"){
    const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Scissors cuts paper. You lose!';
        score.appendChild(content);
   compScore++
}else if (playerSelection == "scissors" && computerSelection== "paper"){
   const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Scissors cuts paper. You win!';
        score.appendChild(content);
   playerScore++
}else if (playerSelection == "scissors" && computerSelection== "rock"){
   const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Rock breaks scissors. You lose!';
        score.appendChild(content);
   compScore++
}else if (playerSelection == "scissors" && computerSelection== "scissors"){
    const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Scissors vs scissors. Tie!';
        score.appendChild(content);
         }
         gameOver()
    }

    function gameOver() {
        if (playerScore == 5) {
            content.classList.add('content');
        content.textContent = 'YOU WIN!';
        score.appendChild(content);

            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

        }
        else if (compScore == 5){
            content.classList.add('content');
        content.textContent = 'YOU LOSE!';
        score.appendChild(content);

            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;


        }

        }
    

const score = document.querySelector('#score');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


