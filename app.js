let userScore=0;
let compScore=0;

const images=document.querySelectorAll(".image");
const msg=document.querySelector("#msg");

const userScorePar=document.querySelector("#userScore");
const compScorePar=document.querySelector("#compScore");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranInx= Math.floor(Math.random()*3);
    return options[ranInx];
}

const drawGame=()=>{
    //console.log("Game was Draw.");
    msg.innerText="Game was Draw! Play Again."
    msg.style.backgroundColor="darkslateblue";
}

const showWin=(userWin,userChoice,comChoice)=>{
    if(userWin){
        //console.log("you win");
        userScore++;
        userScorePar.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        //console.log("you lose");
        compScore++;
        compScorePar.innerText=compScore;
        msg.innerText=`you loose! ${comChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const gameStart=(userChoice)=>{
       console.log("user choice is:",userChoice);
       //generate computer choice
     const comChoice=genCompChoice();
     console.log("computer choice is:",comChoice);

     if(userChoice === comChoice){
        drawGame();
     }else{
        let userWin=true;
        if(userChoice === "rock"){
            //paper scissor
            userWin=comChoice === "paper"? false:true;
        }else if(userChoice == "paper"){
            //rock scissor
            userWin=comChoice === "scissor" ? false:true;
        }else{
            //rock paper
            userWin=comChoice === "rock"? false:true;
        }
        showWin(userWin,userChoice,comChoice);
     }
}

images.forEach((image)=>{
    image.addEventListener("click",()=>{
          const userChoice=image.getAttribute("id");
          //console.log("image was clicked",userChoice);
          gameStart(userChoice);
    })
})