var randomNumber1=Math.floor(Math.random()*6)+1;
var dice1="/images/dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var dice2="/images/dice"+randomNumber2+".png";

document.getElementsByClassName("img1")[0].setAttribute("src",dice1);
document.getElementsByClassName("img2")[0].setAttribute("src",dice2);
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It Draws";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins";
}