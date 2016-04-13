// Rappel sur les boucles avec compteur
var tab = ['a','b','c'];

for(var compteur = 0;tab[compteur];compteur ++){
  
};

// Objets : accès aux propriétés et méthodes :

var monObjet = {
  'propriete1':45,
  propriete2:true,
  propriete3:function(){},
  propriete4:[1,2,3],
  'Ceci est un super propriété que j\'ai mis dans un objet et elle contient un booléen':false
};

monObjet.propriete2; //true
//est la même chose que :
monObjet['propriete2']; //true

monObjet.propriete1; //45
//est la même chose que :
monObjet['propriete1']; //45

monObjet['Ceci est un super propriété que j\'ai mis dans un objet et elle contient un booléen']; //false

var numero = 3;

monObjet['propriete' + numero];

// Un tableau est en réalité un objet spécialisé (les noms de propriétés sont des nombres)
var monTableau = ['a','b','c'];

monTableau[1];

monTableau['ma super propriete'] = 'Vive le poulet !';

monTableau['ma super propriete']; //'Vive le poulet !'
monTableau['ici'] = 'Je suis là';

monTableau.ici; //'Je suis là'






