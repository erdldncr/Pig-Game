'use strict';
let buttonNew=document.querySelector('.btn--new')
let dice= document.querySelector('.dice')
let rollDice=document.querySelector('.btn--roll')
let holdDice=document.querySelector('.btn--hold')
let player1=document.getElementById('.player--0')
let player1score=document.getElementById('.score--0')
let player1CurrentScore=document.getElementById('.current--0')
let player2=document.getElementById('.player--1')
let player2score=document.getElementById('.score--1')
let player2CurrentScore=document.getElementById('.current--1')
///reset will be done by button new
buttonNew.addEventListener('click',function(){
    player1score.innerHTML=0
    player2score.innerHTML=0
    player1CurrentScore.innerHTML=0
    player2CurrentScore.innerHTML=0
})
// holddice button will exchange active player
holdDice.addEventListener('click',function(){
    document.querySelectorAll('.player').forEach(item=>item.classList.toggle("player--active"))

})
///this will set picture for active player and score
rollDice.addEventListener('click',function(){
    let randomNumber=Math.floor((Math.random()*6)+1)
    let src='dice-'+randomNumber+'.png'
    dice.setAttribute('src',src)
    if (randomNumber!=0){
        if(player1.classList.contains('player--active')){

        }
    }

})


