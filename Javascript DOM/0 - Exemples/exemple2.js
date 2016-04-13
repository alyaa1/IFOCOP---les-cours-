/*Prototypage*/

/*Avec la propriété magique __proto__ : (A NE PAS FAIRE !)*/
var lapinPrehistorique = {
  cri: 'Gnnaaaaarl !',
  dentsDeSabre:true,
  glapit:function(){
    alert(this.cri);
  },
  taille:'gigantesque'
};

var lapinDeGarenne = {};

lapinDeGarenne.__proto__ = lapinPrehistorique;

lapinDeGarenne.cri = 'Squiiik !';
lapinDeGarenne.taille = 'minus';
lapinDeGarenne.tailleDesOreilles ='démesurées !';

var monolithe = {};

/*Avec un objet fondamental du langage : Object*/

//On créé un nouvel objet basé sur un prototype
var lapinDesChamps = Object.create(lapinPrehistorique);
//On lui ajoute des propriétés
lapinDesChamps.cri = 'Squiiik !';
lapinDesChamps.taille = 'minus';
lapinDesChamps.tailleDesOreilles ='démesurées !';

//On créé un nouvel objet basé sur un prototype avec un autre objet en arguments définissant les caractéristiques propres à ce nouvel objet
var autreLapinDesChamps = Object.create(lapinPrehistorique, {
  cri:{
    value:'Squiiik !',
    enumerable: true,
    writable: true
  },
  taille: {
    value:'minus',
    enumerable: true,
    writable: true
  },
  tailleDesOreilles: {
    value:'démesurées !',
    enumerable: true,
    writable: true
  }
});

/*Avec une fonction constructeur : Function*/
var MamanLapinPrehistorique = function(){
  this.cri = 'Gnaaaarl !';
  this.dentsDeSabre = true;
  this.glapit = function(){
    alert(this.cri);
  };
  this.taille = 'démesurée';
};

var monLapinPrehistorique = new MamanLapinPrehistorique();

var MamanLapinContemporain = function(){
  this.cri = 'Squiiiik';
  this.dentsDeSabre = false;
  this.taille = 'minus';
  this.oreilles = 'démesurées';
};

MamanLapinContemporain.prototype = monLapinPrehistorique;

var lapinou1 = new MamanLapinContemporain();
var lapinou2 = new MamanLapinContemporain();
var lapinou3 = new MamanLapinContemporain();
var lapinou4 = new MamanLapinContemporain();
var lapinou5 = new MamanLapinContemporain();
var lapinou6 = new MamanLapinContemporain();
var lapinou7 = new MamanLapinContemporain();
var lapinou8 = new MamanLapinContemporain();
var lapinou9 = new MamanLapinContemporain();
var lapinou10 = new MamanLapinContemporain();

lapinou4.cri = 'Ouink Ouink !';

monLapinPrehistorique.radioactif = true;

var monLapinDuFutur = Object.create(lapinou4);

monLapinDuFutur.cri = 'Je suis ravi de faire votre connaissance !';
monLapinDuFutur.cerveau = 'Gros !';
monLapinDuFutur.cri; // 'Je suis ravi de faire votre connaissance !'
monLapinDuFutur.__proto__.cri; //'Ouink Ouink !'
monLapinDuFutur.__proto__.__proto__.cri; // 'Gnaaaarl'

/*Objets fondamentaux :*/
Math; //Objets
Date; //Fonction constructeur















