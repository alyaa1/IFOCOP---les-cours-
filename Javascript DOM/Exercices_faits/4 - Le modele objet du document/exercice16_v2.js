'use strict';


/***************************************************
fonction compteur
**************************************************/
// var compteur = function(){
//   var i = 0;
//   return function(){
//     if (i >= lapin.framesPositions.length){i = 0;}
//     return i++;
//   };
// };
// var g = compteur();
/**************************************************/


/******************************************
Génère le tableau de sprite avec les
arguments spritePerRow et rows
******************************************/

var AnimatedSpriteConstructor = function(spriteSheetId, imageWidth, spriteWidth, spriteHeight, col, rows, missingCols){
  this.imageWidth = imageWidth;
  this.width = spriteWidth;
  this.height = spriteHeight;
  this.SpriteSheet = document.getElementById(spriteSheetId);
  this.col = col;
  this.rows = rows;
  this.missingCols = missingCols;
  this.nbFrames = (col * rows) - missingCols;
  this.framesPositions = [];
  this.framesPositionsLeft = [];
  this.createFramesPositionsRight = function(){
    while (this.framesPositions.length <= this.nbFrames){
      for (var i = 1; i < this.nbFrames; i++){
        var positionLeft = this.width * (i % this.col);
        var positionTop = this.height * Math.floor(i/this.col);
        this.framesPositions.push([positionLeft,positionTop]);
      };
    };
  };
this.counter = 0;
};
/*******************************************************
//créer un objet avec ces paramètres dans l'ordre suivant
  spriteSheetId,imageWidth, spriteWidth, spriteHeight, col,rows,missingCols
  *****************************************************/
var lapin = new AnimatedSpriteConstructor('contenu',1024,130, 152, 7,4,1);
console.log(lapin);
lapin.createFramesPositionsRight();



/****************************************************
Animation du sprite
****************************************************/
function moveSpriteRight(sprite){
  sprite.SpriteSheet.style.transform = 'scaleX(1)';
  // sprite.SpriteSheet.style.left = '0px';
  sprite.SpriteSheet.style.left = '-' + sprite.framesPositions[sprite.counter][0] + 'px';
  sprite.SpriteSheet.style.top = '-' + sprite.framesPositions[sprite.counter][1] + 'px';
  sprite.counter++;
  if (sprite.counter >= sprite.nbFrames){
    sprite.counter = 0
  };
  console.log(sprite.counter)
};

function moveSpriteLeft(sprite){
  sprite.SpriteSheet.style.transform ='scaleX(-1)';
  // sprite.SpriteSheet.style.left = sprite.imageWidth + 'px';
  sprite.SpriteSheet.style.left = '-' + (sprite.imageWidth - sprite.framesPositions[sprite.counter][0] - sprite.width) + 'px';
  sprite.SpriteSheet.style.top = '-' + sprite.framesPositions[sprite.counter][1] + 'px';
  sprite.counter++
  if (sprite.counter >= sprite.nbFrames){
    sprite.counter = 0
  };
  console.log(sprite.counter)
};
