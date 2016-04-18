'use strict';

var lapin = document.getElementById('contenu');
var currentFrame = 0;
var sprites = [];//on crée à tableau avec les positions top et left de chaque sprite

/******************************************
Génère le tableau de sprite avec les
arguments spritePerRow et rows
******************************************/

var spriteSheet = function(col,rows,missingCols){
  var nbFrames = (col * rows) - missingCols ;
  while(sprites.length <= nbFrames){
    for (var sprite = 0; sprite < nbFrames; sprite++){
      var positionLeft = -130 * (sprite%col);
      var positionTop = -152 * Math.floor(sprite/col);
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

//fonction compteur
var compteur = function(){
  var i = 0;
  return function(){
    if (i >= sprites.length){i = 1;}
    return i++;
  };
};
var g = compteur();


spriteSheet(7,4,1);

/*pour retourner une image
sprite.style.transform('scaleX(-1)');
sprite.style.left('-885px')
pas de 130px*/
