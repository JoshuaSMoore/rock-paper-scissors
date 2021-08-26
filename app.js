

function play(playerChoice){
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random()*3)];

  if(playerChoice == computerChoice){
    document.getElementById("results").textContent = "You Tied!"
    return console.log("You Tie!")
  }
  else if(playerChoice === "paper" && computerChoice === "rock"||playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors"){
    document.getElementById("results").textContent = "You Win!"
    return console.log("You Win!") 
  } else{
  document.getElementById("results").textContent = "You Lose!"
return console.log("You Lose =(")}}





// OWWWWW
// if(playerChoice === "rock"){

//   playerScore = 1
// }

// else if(playerChoice === 'paper'){
// playerScore = 2
// }

// else if(playerChoice === 'scissors'){
// playerScore = 3
// }

// else if(playerScore === 1 && computerScore === 1){
// console.log("You Tied!!!")
// }

// else if(playerScore === 1 && computerScore === 2){
// console.log("You Lose!!")
// document.getElementById("results").textContent = "You Lose"}

// else if(playerScore === 1 && computerScore === 3){
// console.log("You Win!")
// document.getElementById("results").textContent = "You Win!"}

// else if(playerScore === 2 && computerScore === 1){
// console.log("You Lose!")
// document.getElementById("results").textContent = "You Lose"}

// else if(playerScore === 2 && computerScore === 2){
// console.log("You Tied!!!")
// document.getElementById("results").textContent = "You Tied!"}

// else if(playerScore === 2 && computerScore === 3){
// console.log("You win!!!")
// document.getElementById("results").textContent = "You Win!"}

// else if(playerScore === 3 && computerScore === 1){
// console.log("You Lose")
// document.getElementById("results").textContent = "You Lose"}

// else if(playerScore === 3 && computerScore === 2){
// console.log("You Win!!!")
// document.getElementById("results").textContent = "You Win!"}

// else

// console.log("You tied!")
// document.getElementById("results").textContent = "You Tied!"

// }




