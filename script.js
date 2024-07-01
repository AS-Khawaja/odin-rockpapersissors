const btn1=document.querySelector("btn1");
const btn2=document.querySelector("btn2");
const btn3=document.querySelector("btn3");
const botScore = document.querySelector('.bot-score');
const humanScore = document.querySelector('.human-score');
const pic=document.querySelector(".pic");
const buttons = document.querySelectorAll('button');
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const subtext=document.querySelector(".subtext");

let humanscore=0;
let computerscore=0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.id === 'restart' ? restart() : playgame(button.id);
    });
  });


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function getcomputerchoice()
{
    return getRandomIntInclusive(0,2);
}


function playRound(humanChoice, computerChoice) {
    if(humanChoice==0&&computerChoice==1)
    {
        computerscore++;
    }
    else if(humanChoice==0&&computerChoice==2)
    {
        humanscore++;
    }
    else if(humanChoice==1&&computerChoice==0)
    {
        humanscore++;
    }
    else if(humanChoice==2&&computerChoice==0)
    {
        computerscore++;
    }
    else if(humanChoice==1&&computerChoice==2)
    {
        computerscore++;
    }
    else if(humanChoice==2&&computerChoice==1)
    {
        humanscore++;
    }
    
}

function hideButtons(op, op2) {
    buttons.forEach((button) => {
      button.style.display = op;
      if(button.id === 'restart') button.style.display = op2;
    });
}

function restart()
{
    humanscore=0;
    computerscore=0;
    botScore.textContent = "0";
    humanScore.textContent = "0";
    hideButtons('block', 'none');
    subtext.textContent="";
}

function playgame(id)
{
    var pic = document.querySelector('.pic');
    
    
    var existingImg1 = document.querySelector('.img1');
    var existingImg2 = document.querySelector('.img2');
    if (existingImg1) {
        pic.removeChild(existingImg1);
    }
    if (existingImg2) {
        pic.removeChild(existingImg2);
    }
   
   

    const computerSelection = getcomputerchoice();
    var img1 = document.createElement("img");
    img1.classList.add("img1");
    var img2 = document.createElement("img");
    img2.classList.add("img2");
    
    img1.src = "images/"+id+".png";
    img2.src = "images/"+computerSelection+".png";

    pic.appendChild(img1);
    pic.appendChild(img2);
    


    playRound(id, computerSelection);
    botScore.textContent = computerscore;
    humanScore.textContent = humanscore;


    if(computerscore===5)
        {
            subtext.textContent="Computer Wins!";
            hideButtons('none', 'block');
        }
    if(humanscore===5)
        {
            subtext.textContent="You Wins!";
            hideButtons('none', 'block');
        }

    
}

