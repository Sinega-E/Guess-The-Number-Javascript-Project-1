'use strict';

const num = Math.random()*20;
const secret_number=Math.trunc(num)+1;
// hello
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener
('click',function(){
    
    const guess_input=Number(document.querySelector('.guess').value);
    if (score>0)
        {
    if(!guess_input){
        document.querySelector('.message').textContent='No Number!'
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess_input<=0 || guess_input>20){
        document.querySelector('.message').textContent='Enter a number between 1 and 20'
        score--;
        document.querySelector('.score').textContent=score;
    }

    else if(guess_input>0 && guess_input==secret_number){
        document.querySelector('.message').textContent='Correct Number!'
        document.querySelector('.highscore').textContent=score;
        document.querySelector('.number').textContent=secret_number;

    }
    else if(guess_input>0 && guess_input!=secret_number){
        if(guess_input>secret_number){
            document.querySelector('.message').textContent='Too high'
            score--;
            document.querySelector('.score').textContent=score;
    }
       else if(guess_input<secret_number){
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent='Too Low'
    }
    }}
    else if(score==0){
        document.querySelector('.message').textContent='You Lost...Try Again!!'
    }
    
})