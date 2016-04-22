'use strict';

window.addEventListener('DOMContentLoaded', function(){

  var monImage = window.document.createElement('img');
  monImage.src = 'http://www.rainbowbuilders.org/Tibet/montagnes/Tibet-Montagne-gorge.JPG';

  var monLoader = window.document.createElement('img');
  monLoader.src = 'loader.gif';
  document.getElementById('monId').appendChild(monLoader);

  monImage.addEventListener('load', function(){
    document.getElementById('monId').removeChild(monLoader);
    document.getElementById('monId').appendChild(monImage);
  });

});
