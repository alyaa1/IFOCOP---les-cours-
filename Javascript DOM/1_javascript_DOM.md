#le Document Object Model - Javascript

##Les 5 types de variables

En Javascript il existe plusieurs types de données

```
var maVariable = 12; //number
var autreVariable = 'hell' //string
var encoreVariable = [1,2,3] // Array
var nouvelleVariable = true;

```

ex :
`2===5 //false`

var encoreUneAutreVariable = function(){};


##le 6ème type = l'objet
Le 6ème type de données est **l'Objet**

`var maBoite = {};`


###Comment est-ce que ça s'utilise ?

`maBoite.emplacement = 2;`

On vient de créer un 'emplacement' dans la boite pour y ranger la valeur 2.

Pour **pointer** sur l'emplacement, on utilise le '.'

`maBoite.emplacement;`

On a donc d'abord crée l'objet et on l'a rempli ensuite.
Mais il est posssible de le faire à la création de l'objet

```
var billy = {
	etagereDuHaut: 'mes livres',
	etagereDuMilieu: 'mes magazines',
	etageDuBas: 'mes papiers administratifs',

};
```

Les variables dans l'object sont appelées des **propriétés de l'objet**

On peut aussi mettre plusieurs informations dans un objet

`billy.doubleFond = ['billets de 500€', 'papiers de ma société offshore'];``

Pour pointer dessus :

`billy.doubleFond[1];``


On peut aussi y stocker une fonction
`billy.ranger = function(){

};
``

Pointer dessus =

`billy.ranger();`

Une fonction dans un objet est nommée **méthode**


##Une première utilisation d'un objet

On crée un objet Bugs Bunny :

```
var bugsBunny = {
  dents: 'longues',
  oreilles: 'longues',
  bonjour: function(){
  alert('quoi de neuf docteur ?');
  },

  repete: function(message){
    alert(message);
  },
    malin: true
}


bugsBunny.bonjour();
bugsBunny.repete('je suis un lapin');
```

Cette notation est appelée *"notation objet javascript"*, c'est à dire **JSON**


Pour effacer une propriété

`delete.malin,'

##this pour pointer dans l'objet

```
var lapin = {
	cri: 'squikk',

	glapit: function(){
		alert(this.cri);
	}
}


lapin.glapit();

```
*Exemple 2 :*

```
var pomme = {
  variete: 'granny',
  ver : {
    prenom: 'Marcel',
    caractere: 'agressif',
    quelEstMonCaractere: function(){
      alert(this.caractere);
    }
  }
}


pomme.ver.quelEstMonCaractere();

```


##Unicité des objets


```
//unicité des objets
var maMaison = {
  rezDeChaussee: ['salon', 'cuisine', 'toilettes'],
  etage: ['chambre des parents', 'chambre des enfants', 'salle d\'eau']
};


var laMaisonDuVoisin = maMaison; // ne fonctionne pas car ça ne fait que copier la référence à l'objet

laMaisonDuVoisin.etage[1] = 'bureau'; //copie l'adresse de ma maison
```




##Créer des objets à l'aide de fonctions **constructeur**


```
var monUsine = function(){
  this.modele = 'Twingo';
  this.couleur = 'rouge';
  this.portes = 3;
  this.coffre = true;
  this.demarre = function(){
    alert('Vroom');
  };
}

var voiture1 = new monUsine();
var voiture2 = new monUsine();
var voiture3 = new monUsine();
var voiture4 = new monUsine();
var voiture5 = new monUsine();
var voiture6 = new monUsine();
var voiture7 = new monUsine();
