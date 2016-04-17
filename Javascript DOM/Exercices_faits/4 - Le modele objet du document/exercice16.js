'use strict';

var lapin = document.getElementById('contenu');
var currentFrame = 0;
var sprites = [];//on crée à tableau avec les positions top et left de chaque sprite

/******************************************
Génère le tableau de sprite avec les
arguments spritePerRow et rows
******************************************/

var spriteSheet = function(col,rows){
  var nbFrames = col * rows;
  while(sprites.length <= nbFrames){
    for (var sprite = 0; sprite < nbFrames; sprite++){
      var positionLeft = -130 * (sprite%col);
      var positionTop = -155 * Math.floor(sprite/col);
      sprites.push([positionLeft,positionTop]);
    };
    return sprites;
  };
};

function moveSprite(sprite,sprites,compteur){
  var i = g();
      sprite.style.left = sprites[i][0] + 'px';
      sprite.style.top = sprites[i][1] + 'px';
  };


var compteur = function(){
  var i = 0;
  return function(){
    return i++;
  };
};

var g = compteur();

//il faudrait faire une closure pour faire évoluer le compteur
