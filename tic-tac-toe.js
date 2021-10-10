"use strict";

window.onload = function() {
    let gameboard = document.getElementById('board').children;
  
   for(let x = 0; x < gameboard.length; x++){
     gameboard[x].setAttribute('class','square');
     
     }
     var tracker = [];
    for(let i = 0; i < gameboard.length; i++){
        gameboard[i].addEventListener("click", function(e){
            if (tracker.length == 0 || (tracker.length % 2) == 0){
                e.target.textContent = "O";
                e.target.classList.add('square', 'O');
                console.log("I have been clicked for O");
                tracker.push("O");
            }else if ((tracker.length % 2) > 0){
                e.target.textContent = "X";
                e.target.classList.add('square', 'X');
                console.log("I have been clicked for X");
                tracker.push("X");
            }
        });  
    };
};   
  