"use strict";

window.onload = function() {
    let gameboard = document.getElementById('board').children;
  
   for(let x = 0; x < gameboard.length; x++){
     gameboard[x].setAttribute('class','square');
   };
  
  }