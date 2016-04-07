##Rappels javascript 2

>date : 5/4/2016


_Avant toute chose on va créer plusieurs variables pour stocker des infos_

```

```
_on demande à l'utitlisateur s'il souhaite saisir une vrille française ou étrangère ?_

```
var choix = confirm('Voulez-vous saisir une ville en France (OK) ou à l\'étranger');
if choix {
  choix = 'en France';
}else{
  choix = 'à l\'étranger';
}
```


_on lui demande de saisir le nome de la ville_

```
var ville = '';
while (ville == null || ville == '' || !isNaN(ville)){
var ville = prompt('Donnez le nom de la ville');
}

```
_On enregistre dans le tableau l'emplacement et le nom de la ville_


_on lui demande s'il souhaite saisire le nom d'une autre ville_
continuer = confirm('Voulez-vous saisir le nom d\'une autre ville ?');



_Quand il dit non, on lui affiche la liste des villes_

indice = 0;
while(ville[indice]){
  alert ('Ville : '  + )
}
