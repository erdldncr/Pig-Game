'use strict';
let buttonNew=document.querySelector('.btn--new')
let dice= document.querySelector('.dice')
let rollDice=document.querySelector('.btn--roll')
let holdDice=document.querySelector('.btn--hold')
let player1=document.querySelector('.player--0')
let player1score=document.getElementById('score--0')
let player1CurrentScore=document.getElementById('current--0')
let player2=document.querySelector('.player--1')
let player2score=document.getElementById('score--1')
let player2CurrentScore=document.getElementById('current--1')
player1score.innerHTML=0
player2score.innerHTML=0
///reset will be done by button new
buttonNew.addEventListener('click',function(){
    player1score.innerHTML=0
    player2score.innerHTML=0
    player1CurrentScore.innerHTML=0
    player2CurrentScore.innerHTML=0
})
// holddice button will exchange active player
holdDice.addEventListener('click',function(){

    document.querySelectorAll('.player').forEach((item,index)=>{
        if(index==0){
            player1score.innerHTML=Number(player1score.innerHTML)+ Number(player1CurrentScore.innerHTML)
            player1CurrentScore.innerHTML=0
            if(Number(player1score.innerHTML)>=100){
                alert('Player 1 is winner')
            }
           
        }else{
            ////when press hold button to add current score to total score
            player2score.innerHTML=Number(player2score.innerHTML)+ Number(player2CurrentScore.innerHTML)
            player2CurrentScore.innerHTML=0/// when switch to make current score 0
            if(Number(player1score.innerHTML)>=100){
                alert('Player 2 is winner')
            }
           
        }
        item.classList.toggle("player--active")
    })

})
///this will set picture for active player and score
rollDice.addEventListener('click',function(){
    let randomNumber=Math.floor((Math.random()*6)+1)
    let src='dice-'+randomNumber+'.png'

    dice.setAttribute('src',src)
    if(randomNumber!=1){
        if(player1.classList.contains('player--active')){
            ///// for each dicing it will increase current score
            player1CurrentScore.innerHTML=Number(player1CurrentScore.innerHTML) + randomNumber
         
        }else{
            player2CurrentScore.innerHTML=Number(player2CurrentScore.innerHTML) + randomNumber
        }
    }else{
        if(player1.classList.contains('player--active')){ ////eger zardan 1 gelirse current 0 olacak ve active class  toggle edilecek
            player1CurrentScore.innerHTML=0
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
        }else{
            player2CurrentScore.innerHTML=0
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
        }
    }

})


