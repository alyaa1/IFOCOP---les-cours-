window.console.time('chrono');

// Déclaration JSON 
var objetEnJSON = {
  propriete:99,
  autrePropriete:function(){
    
  }
};
// Ou
// Fonction Constructeur
var FonctionConstructeur = function(){
  this.propriete = 99;
  this.autrePropriete = function(){
    
  };
};
// Puis instanciation
var objetCreeParFonctionConstructeur = new FonctionConstructeur();

// Accès au propriétés (et méthodes) avec . ou []
objetEnJSON['propriete'];
objetCreeParFonctionConstructeur.autrePropriete();

//Prototypage :
var lAncetre = {
  nom: 'Dupont',
  prenom: 'Maurice'
};

// Possibilité 1: Object.create()
var lHeritier = Object.create(lAncetre);
lHeritier.prenom = 'Jean';

//Possibilité 2: Propriété .prototype des Fonctions/Objets
var ConstructeurDHeritier = function(p){
  this.prenom = p;
};

// Affectation du prototype
ConstructeurDHeritier.prototype = lAncetre;

//Instanciation d'un nouvel héritier
var autreHeritier = new ConstructeurDHeritier('Pierre');

// Design Pattern (architecture logicielle/patron de conception logiciel) : Factory Function
var fonctionUsine = function(r1, p1, r2, p2){

  var ConstructeurDeMaisons = function(r, p){
    this.hauteur = 8;
    this.superficie = 120;
    this.materiaux = [
      'metal',
      'brique',
      'verre',
      'peinture'
    ];
    this.rue = r;
    this.proprietaire = p || 'proprietaire inconnu';
  };

  var ConstructeurDImmeuble = function(r ,p){
    this.hauteur = 30;
    this.superficie = 800;
    this.rue = r;
    this.proprietaire = p;
  };

  var maison = new ConstructeurDeMaisons(r1, p1);

  ConstructeurDImmeuble.prototype = maison;

  var unImmeuble = new ConstructeurDImmeuble(r2, p2);

  return unImmeuble;

};

// Utilisation de la Fonction usine : factory function
var monImmeuble = fonctionUsine('Rue St Sébastien', 'Momo', 'Bd Richard Lenoir', 'Chantal');


// Accessibilité des propriétés et méthodes
// Cette ile n'est pas du tout mysterieuse !!!!
// toutes les propriétés et méthodes sont accessibles depuis le code principal.
var ileMysterieuse = {
  superficie:4,
  position:{
    latitude:235,
    longitude:456
  },
  tresor:true,
  emplacementDuTresor:{
    latitude:235.67,
    longitude:456.34
  },
  motDePasse:'bepo',
  donnezMoiLeMotDePasse: function(mdp){
    if(this.motDePasse == mdp) {
      window.alert(this.emplacementDuTresor.latitude);
    };
  }
};

// Créons une véritable ile mysterieuse
var JulesVerne = function(){
  this.superficie = 4; //proprieté publique
  this.position = { //proprieté publique
    latitude:235,
    longitude:456
  };
  this.tresor = true; //proprieté publique
  var emplacementDuTresor = { 
    latitude:235.67,
    longitude:456.34
  }; //proprieté privée
  var motDePasse = 'bepo'; //proprieté privée
  this.donnezMoiLeMotDePasse = function(mdp){ //getter
    if(motDePasse == mdp) {
      //window.alert(emplacementDuTresor.latitude);
    };
  }; //proprieté publique
  this.changerDePlaceLeTresor = function(l) { //setter
    emplacementDuTresor.latitude = l; 
  }; //proprieté publique
};
var ileMysterieuseDeJV = new JulesVerne();

// emplacementDuTresor existe dans ileMysterieuseDeJV mais n'est pas accessible
ileMysterieuseDeJV.emplacementDuTresor; //undefined
// on peut lire le contenu de emplacementDuTresor en utilisant le getter prévu à cet effet.
ileMysterieuseDeJV.donnezMoiLeMotDePasse('bepo'); //235.67
// on peut modifier le contenu de emplacementDuTresor en utilisant le setter prévu à cet effet.
ileMysterieuseDeJV.changerDePlaceLeTresor(555);

// Exemple d'erreur syntaxique liée au comportement du moteur :
var donneLaBalle = function(){
  return { //attention un saut de ligne avant cette accolade fait planter tout le script. le moteur ajoute un ; après le return...
    diametre:40,
    couleur:'rouge'
  };
}

var baballe = donneLaBalle();

// Modéle Objet du Document
// avec 'use strict'; la ligne ci dessous n'est pas tolérée !
test = 10; //sans le var

window.test; // 10

//Les variable sans le mot-clé var sont automatiquement ajouté comme propriété de window.
window.autreTest = 100;
//  même chose que
autreTest = 100;

window.console.log('Bonjour la console !');

window.setTimeout(function(){
  for(var i = 0; i < 1000000000; i++){
    
  };
  console.log('Boucle terminée');
}, 0);

var pret = false;
window.setTimeout(function(){
  pret = true;
}, 10000);

var idInterval;
idInterval = window.setInterval(function(){
  if(pret){
    window.console.log('prêt !');
    window.clearInterval(idInterval);
  }else{
    window.console.log('pas prêt !');
  }

},1)

window.console.timeEnd('chrono');






















