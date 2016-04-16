'use strict';

function setDefaultMargin(){
  var marginLeft = document.getElementById('contenu').style.marginLeft = -260;
  return marginLeft;
};


function getMarginLeft(){
  var elementMarginLeft = document.getElementById('contenu').style.marginLeft;
  return elementMarginLeft
};

function moveImgRight() {
  var marginLeft = getMarginLeft()
  if (!isNaN(marginLeft)){
    marginLeft = setDefaultMargin() + 'px';
  }
  setMarginLeft(marginLeft);
};


function moveImgLeft() {};



function setMarginLeft(arg) {
    document.getElementById('contenu').style.marginLeft = arg;
}



/****************************************

1. Constructeur

    -> parametre
      -> hauteur
      -> largeur
      -> nb de rangs
      -> nb de colones rang 1
      -> nb de colones dernier rang
      ->
*******************************************/

    var monImage = document.getElementById('contenu');
    var monImagePosition = Number(document.getElementById('contenu').style.left);
    console.log(monImagePosition);

    var ConstructeurDeSprites = function() {
      this.createFrames = function (hauteur, largeur, nbSprites){
        var l = largeur;
        console.log(largeur)
        for (var i = 0; i <= nbSprites; i++) {
          this['frame' + i] = l*i;
          };
        };
      this.imagePosition = Number(document.getElementById('contenu').style.left);
      };


    var lapin = new ConstructeurDeSprites();
    lapin.createFrames(100,-130,5);


    for (var i = 0; lapin.['frame'+i]; i++)
    lapin.imagePosition = lapin.frame1;
    console.log(lapin.imagePosition);








    var largeur = function() {
      var i = 0;
      return function() {
        return i -= 130;
      };
    };

    var  g = largeur();
