#Jour 2  - Javascript DOM

##Créer un objet en Javascript

###Notation JSON
```
var objetEnJSON = {
  propriete :99,
  autrePropriete: function(){

  }
};

```

###Fonction constructeur

```
var fonctionConstructeur = function() {
  this.propriete = 99;
  this.autrePropriete = function(){

  };
};
```

Puis instanciation

`var objetCreeParFonctionConstructeur = new fonctionConstructeur();`


##Pour accéder aux proprietes

```
objetEnJSON.propriete;
objetEnJSON['propriete'];
```


##Notion de prototypage


```
var lAncetre = {
  nom: 'Dupont',
  prenom: 'Maurice'
};

var lHeritier = Object.create(lAncetre);
var lHeritier.prenom = 'Jean';

var constructeurDHeritier.prototype = lAncetre;

var autreHeritier : new constructeurDHeritier('Pierre');
```


##Pour limiter le nombre de variables dans l'espace global


on utilise les **fonctions usines** (*Factory functions*)
```
var fonctionUsine = function (r1, p1, r2, p2){
var constructeurDeMaison = function(r, p){
  this.hauteur = 8;
  this.superficie = 120;
  this.materiaux = [
    'metal',
    'brique',
    'verre',
    'peinture'];
    this.rue = r;
    this.proprietaire = p;
}


var constructeurDImmeuble = function(r, p) {
  this.hauteur = 30;
  this.superficie = 800;
}



var maison = new constructeurDeMaison('Rue St Sebastien', 'Momo');
constructeurDImmeuble.prototype = maison;
var unImmeuble = new constructeurDImmeuble();
return unImmeuble

}


```


##Accessibilité des propriétés et méthodes


```
var ileMysterieuse = {
  superficie: 4,
  position: {
    latitude: 235,
    longitude: 456
  },
  tresor: true,
  emplacementDuTresor: {
    latitude: 235.67,
    longitude: 456.34
  }
  motDePasse: 'bepo'

  donnezMoiLeMotDePasse: function(mdp){
    if(this.motDePasse == 'mdp'){
      window.alert(this.emplacementDuTresor.latitude)
    }
  }

};

```
Ici toutes les propriétés et méthodes sont accessibles depuis l'extérieur !



```
var julesVerne = function () {
  this.superficie= 4;
  this.position= {
    latitude: 235,
    longitude: 456
  },
  this.tresor= true;
  var emplacementDuTresor= { //privé 
    latitude: 235.67,
    longitude: 456.34
  };
  var motDePasse= 'bepo';

  this.donnezMoiLeMotDePasse = function(mdp){
    if(motDePasse == 'mdp'){
      window.alert(emplacementDuTresor.latitude)
    };
  };

};


var ileMysterieuse = new julesVerne()
```
