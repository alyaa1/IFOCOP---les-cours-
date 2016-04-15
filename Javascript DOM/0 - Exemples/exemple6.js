window.addEventListener('DOMContentLoaded', function(){

  // Modifier des propriété de style :
  window.document.body.style['background-color'] = 'red';
  // equivalent à
  window.document.body.style.backgroundColor = 'blue';

  //Accèder à un objet au sein de l'arborescence du DOM et modifier une des ces propriétés
  /*
  window.document.body.children[1].children[1].children[1].children[0].children[0].children[2].children[0].innerHTML = 'Là !';
  */

  //Utilisation de la méthode .getElementById() pour récupérer une référence à un objet du DOM dont la propriété id est renseignée
  var refAuSpan = window.document.getElementById('span-au-fond-a-droite');
  console.log(refAuSpan);
  //Modification d'un propriété de cet objet
  refAuSpan.style.color = 'yellow';

  //Utilisation de la méthode .getElementsByTagName()  pour récupérer un tableau de référence à des objets correspondant à des balises d'un certain type
  var tabDeRef = window.document.getElementsByTagName('span');

  //Modification d'un propriété du 4ème objet
  tabDeRef[3].style.fontFamily = 'arial';

  var premierClick;
  // Gestion d'évenement
  refAuSpan.onclick = function(blanquetteDeVeau){
    /*window.alert('cliqué');
    blanquetteDeVeau.preventDefault();
    if(blanquetteDeVeau.altKey){
      window.alert('touche alt appuyée');
    }*/
    //refAuSpan.style.marginLeft = blanquetteDeVeau.clientX + 'px';
    if(premierClick){
      window.clearTimeout(idTimeout);
      window.alert('double cliqué');
      premierClick = false;
    }else{
      premierClick = true;
      var idTimeout = window.setTimeout(function(){
        window.alert('cliqué');
        premierClick = false;
      }, 500);
    };
    
    blanquetteDeVeau.preventDefault();
  };

});

// Animation
var coloriage = function(){
  if (window.document.body.style.backgroundColor == 'yellow') {
    window.document.body.style.backgroundColor = 'blue';
  } else {
    window.document.body.style.backgroundColor = 'yellow';
  }
};

var valeurInitiale;
var aExecuter = function(momentDuRafraichissiment){

  //coloriage();
  if(valeurInitiale){
    var tempsEcoule = momentDuRafraichissiment - valeurInitiale;
    console.log(tempsEcoule);
    if(tempsEcoule >= 500){
      coloriage();
      valeurInitiale = momentDuRafraichissiment;
    }
  }else{
    valeurInitiale = momentDuRafraichissiment;
  }

  window.requestAnimationFrame(aExecuter);
}

window.requestAnimationFrame(aExecuter);















