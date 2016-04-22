// fonction auto exécutable 
(function(){ //déclaration...
  ; //instructions
  ;
  ;
})(); //... et exécution.

// fonction auto exécutable avec arguments
var jQuery = jQuery || {};

(function($){ //déclaration...
  ; //instructions
  $; //contient ce que contient jQuery
  ;
  ;
})(jQuery); // et exécution.

// Design pattern : Observer
window.document.addEventListener('DOMContentLoaded', function(){
  
  var HTMLInputElement = window.document.getElementById('formule');

  var observateurDeFormule = function(){
    
    var saisie = HTMLInputElement.value;
    if(saisie == 'abracadabra'){
      var HTMLDivElement = window.document.getElementById('lapin');
      if(HTMLDivElement){
         HTMLDivElement.style.display = 'block';
      }else{
        HTMLDivElement= window.document.createElement('div');
        var HTMLTextNode = window.document.createTextNode('Quoi de neuf docteur !');
        HTMLDivElement.appendChild(HTMLTextNode);
        HTMLDivElement.id = 'lapin';
        HTMLDivElement.style.color = 'pink';
        HTMLDivElement.style.fontSize = '14px';
        HTMLDivElement.style.display = 'block';
        HTMLDivElement.style.fontWeight = 'bold';

        window.document.body.appendChild(HTMLDivElement);
      };
    } else {
      var HTMLDivElement = window.document.getElementById('lapin');
      if(window.document.getElementById('lapin')){
          HTMLDivElement.style.display = 'none';
      }
    };

    window.requestAnimationFrame(observateurDeFormule);
  };
  
  window.requestAnimationFrame(observateurDeFormule);

});

// Gestion des évènements
window.document.addEventListener('DOMContentLoaded', function(){
  var HTMLAElements = window.document.getElementsByTagName('a');

  HTMLAElements[0].addEventListener('click', function(evtSouris){
    var choix = window.confirm('Voulez vous aller vers Google ?');
    if(choix){
      //true
      // Rien
    }else{
      //false
      // On annule l'évènement
      evtSouris.preventDefault();
    };
  });

});

// Exemple de fonction usine :
var Usine = function(){
  
  var proto = {
    t: function(){
      window.alert('Je suis ton père !');
    }
  };

  var Constructeur = function(){};

  Constructeur.prototype = proto;

  return new Constructeur();
};

var obj = Usine();











