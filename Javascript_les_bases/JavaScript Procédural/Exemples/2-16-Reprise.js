//Variable
  var unRangement;
  unRangement = 'Du texte';
  var unGrandPlacard = 15;
  //Changement de valeur d'une variable
  unGrandPlacard = 17;
  unGrandPlacard = unGrandPlacard + 85;

//Les tableaux
  var unTableauSimple = ['premier emplacement', 'autre', 17, 45.3];
  //Pour afficher une valeur d'un tableau, on indique l'indice (attention, le premier est 0)
  alert(unTableauSimple[1]);//affichera 'autre'
  //Pour ajouter un élément à un tableau
  unTableauSimple[4] = 'élément en plus';
  //Pour modifier un élément déjà présent
  unTableauSimple[1] = unTableauSimple[1] + '  élément';
  alert(unTableauSimple[1]);//affichera 'autre élément'

  //Un tableau peut contenir des valeurs simples et des tableaux
  var calendrier = ['semaine',['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'],'mois',['janvier','février','mars','avril','mai']];
  alert(calendrier[1][5]);//affichera samedi
  alert(calendrier[1][0] + ' 4 ' + calendrier[3][3]);//affichera lundi 4 avril

//Un opérateur particulier, le modulo :
  25 % 2; //retourne 1
  36 % 2; //retourne 0
  89 % 6; //retourne 5

//Les booléens et les tests
  //true ou 1 -> vrai
  //false ou 0 -> faux

  //test sur la valeur
  alert(true == false);//affichera false
  alert(true != false);//affichera true
  alert(15 < 18);//affichera true

  //test sur la valeur et le type
  alert(48 === '48');//affichera false
  alert('74' !== 50 + 24);//affichera true

  //il est possible de combiner les tests
  alert(true && false); //affichera false
  alert(true || false); //affichera true

//Utilisation de conditions
  var texte = 'bonjour';
  if (texte == 'bon' + 'jour') {
    alert('Début de journée');
  } else {
    alert('Autre moment');
  }

  var nombre = 41;
  if (nombre >= 4) {
    if (nombre > 17) {
      alert('C\'est un grand nombre !');
    } else {
      alert('Le nombre vaut ' + nombre);
    }
  } else {
    alert('Nombres est inférieur à 4')
  }

//Les fonctions
  var unPremierOutil = function(){
    var calcul = 17 + 78 * 41;
    alert('Le résultat est ' + calcul);
  };
  //Pour exécuter la fonction
  unPremierOutil();

  var uneFonctionAvecArguments = function(nombre,texte){
    nombre = nombre * nombre;
    alert(texte + ' ' + nombre);
  };
  uneFonctionAvecArguments(58,'Le carré de 58 vaut');

  var fonctionAvecUnTableau = function(unTableau){
    var resultat = unTableau[0] + unTableau[1] + unTableau[2];
    alert(resultat);
  };
  fonctionAvecUnTableau([41,85,94]);

  var sommeDesTroisPremiers = function(soleil){
    soleil[3] = soleil[0] + soleil[1] + soleil[2];
    return soleil;
  };
  var nouveauTableau = sommeDesTroisPremiers([74,854,12]);
  alert(nouveauTableau[3]);//affichera 940
