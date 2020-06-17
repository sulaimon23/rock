

const tie = document.getElementById("tie");
const  userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");

document.getElementById("rock").addEventListener('click', e => {
 randomNumber = Math.floor(Math.random() * 3)
 if(randomNumber == 0){
  draw()
  console.log('tie')
 }
 if(randomNumber == 1){
  lost()
  console.log('lose')
 }
 if(randomNumber == 2){
  win()
  console.log('win')
 }
 console.log(randomNumber, 'rock')
})


document.getElementById("paper").addEventListener('click', e => {
 randomNumber = Math.floor(Math.random() * 3)
 if(randomNumber == 0){
  win()
  console.log('win')
 }
 if(randomNumber == 1){
  draw()
  console.log('tie')
 }
 if(randomNumber == 2){
  lost()
  console.log('loose')
 }
 console.log(randomNumber, 'paper')
})


document.getElementById("scissors").addEventListener('click', e => {
 randomNumber = Math.floor(Math.random() * 3)
 if(randomNumber == 0){
  lost()
  console.log('loose')
 }
 if(randomNumber == 1){
  win()
  console.log('win')
 }
 if(randomNumber == 2){
  draw()
  console.log('tie')
 }
 console.log(randomNumber, 'sissos')
})

function win(){
 userScore_span.innerHTML = parseInt(userScore_span.innerHTML) +1
 return
}

function lost(){
 computerScore_span.innerHTML = parseInt(computerScore_span.innerHTML) +1
 return
}

function draw(){
 userScore_span.innerHTML = userScore_span.innerHTML;
 computerScore_span.innerHTML = computerScore_span.innerHTML
 return
}


function display(){
 if(userScore_span.innerHTML == ''){
  userScore_span.innerHTML = 0
 }
 if(computerScore_span.innerHTML == ''){
  computerScore_span.innerHTML = 0
 }
}

display();















// function getComputerChoice(obb) {
// 	const choices = ['rock' , 'paper' , 'scissors'];
//  const randomNumber = Math.floor(Math.random() * 3);
//  console.log(randomNumber)
// 	return choices[randomNumber];
// }
// // function win(userChoice , computerChoice) {
// // 	userScore++;
// // 	userScore_span.innerHTML = userScore;
// // 	computerScore_span.innerHTML = computerScore;
// // 	team_p.innerHTML = userChoice + "beats" + computerChoice + "You win!";
// // }
// // function lose() {

// // }
// // function draw() {

// // }

// function getUserChoice(){
//  if
// }

// function game(userChoice) {
// 	const computerChoice = getComputerChoice();
// 	const userChoice = getUserChoice();
// 	switch (userChoice + computerChoice) {
// 		case "rs":
// 		case "pr":
// 		case "sp":
// 		win(userChoice , computerChoice);
// 		break;
// 		case "rp":
// 		case "ps":
// 		case "sr":
// 		lose();
// 		break;
// 		case "rr":
// 		case "pp":
// 		case "ss":
// 		draw();
// 		break;
		
//  }
//  console.log(computerChoice)
// }
 
// function main() {


// rock_div.addEventListener('click', function() {
// 	game("rock");
// });
// paper_div.addEventListener('click',function() {
// 	game("paper")
// });
// scissors_div.addEventListener('click',function() {
// 	game("scissors")
// });


// }

//    main();

