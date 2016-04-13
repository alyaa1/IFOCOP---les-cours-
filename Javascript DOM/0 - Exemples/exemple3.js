
// Déclarer un objet :
var unObjet = {};

var unAutreObjet = {
  ici: 45,
  la: true,
  ailleurs: function(){},
  loin: 'Hello !'
};

// Accèder aux propriétés et méthodes d'un objet :
unAutreObjet.ailleurs; //contient function(){}
unAutreObjet.ailleurs(); // execute function(){}
// ou...
unAutreObjet['ailleurs']; //contient function(){}
unAutreObjet['ailleurs'](); // execute function(){}

// Autre déclaration :
var encoreUnAutreObjet = {
  'premier emplacement au sein de cet objet': 99,
  'méthode au sein d\'un objet': function(){}
};

// Seule possibilité pour accéder aux propriétés et méthodes de l'objet :
encoreUnAutreObjet['premier emplacement au sein de cet objet']; // 99

encoreUnAutreObjet['méthode au sein d\'un objet'](); //exécute function(){}

// Exemple : je créé dynamiquement le contenu d'un objet :
var objet = {}
var compteur = 1;
while(compteur <= 10) {
  objet['propriete' + compteur] = compteur * 10;
  compteur ++;
};

var objetParticulier = {
  0: 99,
  1: 'Hello !'
};

objetParticulier[0]; // 99

var autreObjetParticulier = [99, 'Hello !'];

autreObjetParticulier[0]; // 99

autreObjetParticulier.choucroute = 'Grand Est';

// for... in... permet d'itérer à travers les propriétés d'un objet.
for(propriete in autreObjetParticulier){
  autreObjetParticulier[propriete]; //accéde à la propriété courante dans la boucle.
}

// Prototypage :
var louisXV = {
  decapite: false,
  prenom: 'Louis',
  nom: 'de Bourbon',
  numero: 15
};


var louisXVI = Object.create(louisXV);

louisXVI.numero = 16;
louisXVI.decapite = true;
louisXVI.passion = 'Serrurerie';

// Fonctions constructeur
var ConstructeurDeMaisonKaufmanBroad = function(){
  this.superficie = 120;
  this.nombreDePiece = 6;
  this.piece = {
    rezDeChaussee:['entrée','toilettes','salon','cuisine'],
    etage:['chambre 1','chambre 2', 'salle d\'eau']
  };
  this.sonne = function(){
    alert('Dring !!!');
  };
};
// Instances de la fonction constructeur : Mot clé new
var laMaisonDesMartins = new ConstructeurDeMaisonKaufmanBroad();
var laMaisonDesDuponts = new ConstructeurDeMaisonKaufmanBroad();
var laMaisonDesDurands = new ConstructeurDeMaisonKaufmanBroad();
// On a créé 3 objets à l'aide de la fonction constructeur

//Prototypage avec Object.create()
laMaisonDesMartinsApresOuragan = Object.create(laMaisonDesMartins);

laMaisonDesMartinsApresOuragan.piece.etage = null;

//Autre technique de prototypage
var ConstructeurDeMarcelDurand = function(){
  this.prenom = 'Marcel';
  this.nom = 'Durand';
  this.age = 89;
  this.yeux = 'gris';
};

var ConstructeurDePapa = function(pr, a){
  this.age = a;
  this.prenom = pr;
}

ConstructeurDePapa.prototype = new ConstructeurDeMarcelDurand();

var papa1 = new ConstructeurDePapa('Marc', 43);
var papa2 = new ConstructeurDePapa('Raoul', 36);





















