#Rappels sur le javascript

> 4 avril 2016
>
##Les booleéns et les tests

_Rappels_

  - true ou 1  -> vrai
  - false ou 0 -> faux

##Les tests

###Test sur la valeur

```
alert(true == false); //affichera false
alert(true !=false); //affichera true
alert(15 < 18) // affichera true

```

###Test sur la valeur et le type

```
alert(48 === '48'); //affichera false
alert('74' !==)
```

###Combinaison de tests

```
alert (true && false) // affichera false
alert (true || false) //affichera true
```

###Utilisation des conditions

```
var texte = "bonjour";
if (texte  == 'bon' + 'jour'){
  alert ('Début de journée');
}else{
  alert('autre moment');
}
```


on peut aussi imbriquer les conditions

```
var nombre = 41;
if (nombre >= 4){
  if (nombre > 17){
    alert("c'est un grand nombre")
  }else{
    alert("le nombre vaut " + nombre);
  }
}else{
  alert('le nombre est inférieur à  4');
}
```



##Les fonctions


```
var unPremierOutil = function(){
  var calcul = 17 + 78 * 41;
  alert('Le résultat est ' + calcul);
};
```
Pour executer une fonction, il faut ensuite l'appeler

```
unPremierOutil();
```


###les fonctions avec des arguments

```
var uneFonctionAvecArguments = function(nombre, texte){
  nombre = nombre * nombre;
  alert(texte + ' ' + nombre);
}
uneFonctionAvecArguments(58, 'le carré de 58 vaut');
```

il est aussi possible de faire des fonction avec des tableaux comme argument.

```
var fonctionAvecUnTableau = function(unTableau){
  var resultat = unTableau[0] + unTaleau[1];
  alert (resultat);
}
fonctionAvecUnTableau([41, 85, 94]);
```

```
var sommeDesTroisPremiers = function(soleil){
  soleil[3] = soleil[0] + soleil[1] + soleil[2];
  return soleil;
};
sommeDesTroisPremiers([1,2,3]);
```
