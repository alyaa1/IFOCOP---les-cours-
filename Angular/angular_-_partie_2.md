#Angular - partie 2

3 mai 2016

*****

##Rappel


Le document HTML est chargé en mémoire par le navigateur. 
Il est alors stocké dans le **DOM**. 

Le DOM est une **arborescence d'objets** qui se construit en fonction de la structure du document. 

Le navigateur utilise le DOM pour générer un affichage. 


Quand on charge **Angular** dans le document, un objet Angular se charge en mémoire. 
**Angular** crée une arborescence d'objets qui imite la structure du DOM : **SCOPE TREE** (*arbre de contexte*)

Ce SCOPE ne fait que décrire des données 

	root scope
	|
	|--------- scope
	|
	|------------------scope 
c'est le **MODEL**	

Le DOM est la **VUE**

Si dans une `div`on écrit une **expression** `test = 10`



##Module 

Pour créer un module

```
	<script>
		angular.module('monNouveauModule', []);
	<script>
	
```

Ensuite, on va lancer Angular sur une struture 

```
angular.bootstrap(window.document, ['monNouveauModule'], {strictDi: true})
```


##Controller

C'est une fonction 