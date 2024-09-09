'use strict';
// Initial Vaues
let secret_number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message
}
const decrement=function(){
    score--;
   document.querySelector('.score').textContent=score;}

document.querySelector('.check').addEventListener
('click',function(){
    
    const guess_input=Number(document.querySelector('.guess').value);
    // score>0
   
    if (score>0)
        {
        if(!guess_input){
            displayMessage('No Number!')
            decrement()
        }
        else if(guess_input<=0 || guess_input>20){
            displayMessage('Enter a number between 1 and 20')
            decrement()
        }

        else if(guess_input==secret_number){
            displayMessage('Correct Number!')
            document.querySelector('.number').textContent=secret_number;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';

            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
    }
        else if(guess_input!=secret_number){
            if(score>1){
            displayMessage(guess_input>secret_number?'Too high':'Too Low')
            decrement()
            document.querySelector('body').style.backgroundColor='#222';
            document.querySelector('.number').style.width='15rem';
        }
        else{
            displayMessage('You Lost...Try Again!!')
            document.querySelector('.score').textContent='0';
            }
    }}
    // score=0

})

// Again button
document.querySelector('.again').addEventListener
('click',function(){
   
    score=20;
    secret_number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value=''
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.number').textContent='?'
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})