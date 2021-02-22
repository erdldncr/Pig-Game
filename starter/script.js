'use strict';
let buttonNew=document.querySelector('.btn--new')
let dice= document.querySelector('.dice')
let rollDice=document.querySelector('btn--roll')
let holdDice=document.querySelector('btn--hold')
let player1score=document.getElementById('score--0')
let player1CurrentScore=document.getElementById('current--0')
let player2score=document.getElementById('score--1')
let player2CurrentScore=document.getElementById('current--1')

buttonNew.addEventListener('click',function(){
    player1score.innerHTML=0
    player2score.innerHTML=0
    player1CurrentScore.innerHTML=0
    player2CurrentScore.innerHTML=0
})