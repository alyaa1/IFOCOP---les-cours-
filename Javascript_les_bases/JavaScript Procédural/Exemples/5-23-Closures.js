var retourMesure = function(unite){
  return function(valeur){
    return valeur + unite;
  };
};

var retourMesurePixels = retourMesure('px');
var retourMesurePourcentage = retourMesure('%');
var retourMesureEm = retourMesure('em');

//Voilà ce que contient retourMesurePixels:
retourMesurePixels = function(valeur){
  return valeur + 'px';
};

var mesure1 = retourMesurePixels(15);
var mesure2 = retourMesurePixels(34);

var retourMesure = function(){
  if(arguments[1]){
    var ajout = arguments[1];
  } else {
    var ajout = 0;
  }
  return function(valeur){
    return valeur + ajout + arguments[0];
  };
};

var retourMesurePixels = retourMesure('px');
var retourMesurePixelsAjout = retourMesure('px',52);