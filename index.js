// First create the random number
randomNumber1 = Math.floor((Math.random()*6)+1);
var new_path = "images/" + randomNumber1 + ".png";
document.querySelector(".col1 img").setAttribute("src", new_path)

randomNumber2 = Math.floor((Math.random()*6)+1);
var new_path = "images/" + randomNumber2 + ".png";
document.querySelector(".col2 img").setAttribute("src", new_path)

results = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
  results.textContent = "Player 1 wins!";
}
if (randomNumber1 < randomNumber2){
  results.textContent = "Player 2 wins!";
}
if (randomNumber1 == randomNumber2){
  results.textContent = "It is a tie!";
}
