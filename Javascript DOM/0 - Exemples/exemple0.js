/*Types de données*/
//Number
var maVariable = 12;
//String
var autreVariable = 'Hello !';
//Array
var encoreVariable = [1,2,3];
//Boolean
var nouvelleVariable = true;
// Utile pour les calculs logiques, par ex :
2 === 3; //false
//Function
var encoreUneAutreVariable = function(){};

//et Objet !
var maBoite = {};

//Utilisation d'un objet :
maBoite.emplacement = 2;
maBoite.toto = true;

maBoite.toto; //contient true

maBoite.emplacement; //contient 2
console.log(maboite.emplacement);

//Notation JSON (Notation Objet JavaScript)
var billy = {
  etagereDuHaut: 'mes livres',
  etagereDuMilieu: 'mes magazines',
  etagereDuBas: 'mes papiers administrateur'
};

billy.etagereDuMilieu; //'mes magazines'

billy.etagereDuMilieu = 'Portrait de moman';

billy.doubleFond = ['billets de 500€','les papiers de ma societe offshore'];

billy.doubleFond[1]; //'les papiers de ma societe offshore'

billy.ranger = function(){
  //;
};

billy.ranger();

var tableau = ['a','b']

//Propriétés et méthodes :
var bugsBunny = {
  dents:'longues', //propriété
  oreilles:'longues',
  bonjour:function(){ //méthode
    alert('Quoi de neuf docteur ?!');
  },
  repete:function(message){
    var message = message || 'Message par défaut';
    alert(message);
  },
  malin:true
};

bugsBunny.repete('Je suis un lapin !');

// Se repérer dans un objet :
var enHaut = {
  enHaut:[{
    enHaut:function(){},
    enBas:'Ailleurs'
  },{
    enHaut:1,
    enBas:3
  }],
  enBas:{
    enHaut:{
      enBas:true
    },
    enBas:{
      enHaut:[false, function(){}],
      enBas:{
        enHaut:'ici',
        enBas:'là'
      }
    }
  }
};

enHaut.enBas.enBas.enHaut[1]();

enHaut.enBas.enBas.enHaut[0] = 45;

enHaut.enBas.enBas.enBas.choucroute = enHaut.enBas.enBas.enHaut[0] * 2;

/*Mot clé delete*/
delete enHaut.enBas.enBas.enBas.choucroute;

/*Mot clé this*/
var lapin = {
  cri:'Squiiik !',
  glapit:function(){
    alert(this.cri); //this : référence à l'objet dans lequel se situe la méthode.
  }
};

lapin.glapit();

var pomme = {
  variete:'granny',
  ver:{
    prenom:'Marcel',
    caractere:'aggressif',
    quelEstMonCaractere:function(){
      alert(this.caractere);
    }
  }
};

pomme.ver.laPomme = pomme;

pomme.ver.quelleEstLaVarieteDePommeDansLaquelleJeSuis = function(){
  alert(this.laPomme.variete);
};

pomme.ver.quelleEstLaVarieteDePommeDansLaquelleJeSuis();

pomme.ver.quelEstMonCaractere();


// Unicité des objets
var maMaison = {
  rezDeChaussee:['salon', 'cuisine', 'toilettes'],
  etage:['chambre des parents', 'chambre des enfants', 'salle d\'eau']
};

// laMaisonDuVoisin contient une référence à l'objet référencé dans maMaison
var laMaisonDuVoisin = maMaison;

laMaisonDuVoisin.etage[1] = 'bureau';

// La maison du voisin et la mienne sont les mêmes !!! On ne peut pas copier un objet. Ce qu'on copie c'est l'adresse mémoire de l'objet : sa référence.

// Créer des objets à l'aider de fonction "constructeur"
var MonUsineRono = function(dfqsgfqehqed){
  this.modele = 'Twingo'; //propriété par défaut
  this.couleur = dfqsgfqehqed || 'jaune'; //propriété du constructeur
  this.portes = 3;
  this.coffre = true;
  this.demarre = function(){
    alert('Vroooooom !');
  };
};

//Mot clé new : le fait de créer un objet est appélé instanciation (l'objet créé est une instance de sa fonction constructeur)
var voiture1 = new MonUsineRono('verte');
var voiture2 = new MonUsineRono('bleue');
var voiture3 = new MonUsineRono('jaune');
var voiture4 = new MonUsineRono('rouge');
var voiture5 = new MonUsineRono('noire');
var voiture6 = new MonUsineRono('grise');
var voiture7 = new MonUsineRono('violette');

voiture3.couleur = 'vert';
