// Gestionnaire d'évènement (event listener / event handler)
var reactionAuClick = function(evtSouris){         
  //Cette fonction est exécutée par le navigateur en réaction à un click.
  console.log('Firefox exécute cette fonction !');
  // Le navigateur exécute la fonction en lui fournissant un argument qui est un objet qui représente l'évènement survenu.
  // evtMickey; //contiendra un objet d'évènement.
  console.log(evtSouris);
};

// Attacher le gestionnaire d'évènement à l'évènement click
window.addEventListener('click', reactionAuClick);

// Detacher le gestionnaire d'évènement à l'évènement click
window.removeEventListener('click', reactionAuClick);

// Certains ne peuvent être utilisé qu'avec .addEventListener
window.addEventListener('DOMContentLoaded', function(evt){

  //Cette fonction est déclenchée avant l'évènement load et après le chargement du DOM en mémoire

});


// .addEventListener() est uniquement disponible sur les navigateur Internet issus de netscape (Firefox, Safari, Opera, Chrome, ...)

// Sur Internet Explorer avant la version 9, on doit utiliser la méthode .attachEvent()

//Test de compatibilité :

var attacherEvenement = function(nomEvt, uneFonction) {
  if (window.addEventListener) {
    // Ici je sais que .addEventListener() existe donc je suis sur IE9, FF, Safari, Chrome, ...
    window.addEventListener(nomEvt, uneFonction);
  } else {
    if (window.attachEvent) {
      // Ici je sais que .attachEvent() existe donc je suis sur IE 6,7,8
      window.attachEvent(nomEvt, uneFonction);
    } else {
      // Ici je suis perdu !
      
    }
  };
};

attacherEvenement('load', function(){
    alert('Chargé !');
});

// Compatibilité des évènements :
// Evenement molette de la souris :
/*
  DOMMouseScroll : Firefox
  mousewheel : IE 6 - 7
  mousescroll : Safari, Chrome, Opera, IE 8, 9 
*/
var auScroll = function(){
    alert('Scrollé !');
};

attacherEvenement('DOMMouseScroll', auScroll);
attacherEvenement('mousewheel', auScroll);
attacherEvenement('mousescroll', auScroll);


// Design pattern : Fonctions Usines 
var nouvelleRono = function(m, c){

   var Chassis = function(){
     this.roueAvantGauche = true;
     this.roueAvantDroite = true;
     this.roueArriereGauche = true;
     this.roueArriereDroite = true;
     this.arbreDeTransmission = true;
     this.moteur = true;
   };
   
   var Voiture = function(modele, couleur){
     this.modele = modele;
     this.couleur = couleur;
     this.marque = 'Rono';
   };
   
   Voiture.prototype = new Chassis();

   var voiture = new Voiture(m, c);
   
   return voiture;
}

var maVoiture = nouvelleRono('R5', 'Rouge');

// Design pattern : chainage 
var Yannick = {
  premiereParole:function(){
    window.alert('Ces soiréés là');
    return this;
  },
  deuxiemeParole:function(){
    window.alert('on drague on branche');
    return this;
  },
  troisiemeParole:function(){
    window.alert('toi même tu sais pourquoi');
    return this;
  }
};

Yannick.premiereParole().troisiemeParole().deuxiemeParole();

// Design pattern : injection de dépendance
var injecteur = function(nom, maFonction){

  var a = 10;
  var b = 'Bonjour !';
  var c = true;

  for(var i=0; i < nom.length; i++){
    if(nom[i] == 'a'){
      maFonction(a);
    }
    if(nom[i] == 'b'){
      maFonction(b);
    }
    if(nom[i] == 'c'){
      maFonction(c);
    }
  }

}

injecteur(['a','b','c','c','c','c','a'], function(arg){
  window.alert(arg);
});



































