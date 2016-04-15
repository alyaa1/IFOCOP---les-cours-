'use strict';


window.document.body.addEventListener('load', alert('Ce message est affiché au chargement du document !'));

var monLi = window.document.getElementsByTagName('li');
monLi[0].style.color = 'red';
monLi[0].addEventListener('mouseover', function(){alert('Ce message est affiché lorsqu\'on survole ce point.');});


var monSpan = document.getElementsByTagName('span');
monSpan[2].style.color = 'red';
monSpan[2].addEventListener('mouseout', function() {
  window.alert('Ce message est affiché lorsqu\'on ne survole plus cet élément.');
});

var monInput = document.getElementsByName('q');
console.log(monInput);
monInput[0].addEventListener('focus', function(){
  window.alert('Vous avez séléctionné le champ de saisie!');
});

// onload="window.alert('Ce message est affiché au chargement du document !')"
