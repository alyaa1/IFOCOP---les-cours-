'use strict';


var domLoaded = function() {
  var maDiv = document.createElement('div');
  maDiv.style.height = '200px';
  maDiv.style.width = '200px';
  maDiv.style.position = 'absolute';
  maDiv.style.backgroundColor = 'red';
  maDiv.id = 'ascenseur';
  maDiv.style.textAlign = 'center';
  maDiv.style.zindex = -1;

  var monTitre = document.getElementsByTagName('body')[0];
  console.log(monTitre);
  monTitre.appendChild(maDiv);

  console.log('domLoaded');
  maDiv.addEventListener('DOMMouseScroll', function(e){
    moveDiv(e.detail);
  });
};

var moveDiv = function(pas){
  var maDiv = document.getElementById('ascenseur');
  console.log(maDiv);
  var startingPosition = parseInt(getComputedStyle(maDiv).top);
  console.log(startingPosition);
  var newPosition = startingPosition + pas;
  maDiv.style.top =  newPosition + 'px'
}
//
window.document.addEventListener('DOMContentLoaded', domLoaded,false);
