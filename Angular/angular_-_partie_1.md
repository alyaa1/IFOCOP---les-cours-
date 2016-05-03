#Angular - partie 1

2 mai 2016


*Projet soutenu par Google et OpenSource.*

**************

##Aborescence de SCOPE



1. Le DOM décrit un affichage, mais ne définit pas la nature des données. 

Avant de procéder à l'affichage, en javascript, on recrée une structure des données qui imite le DOM. 
C'est **l'arborescence de scope**. 
Le DOM et l'arborescence sont synchronisés de façon bi-directionnelle


C'est un **langage d'expression**, c'est à dire que Angular, en lisant le innerHTML, va remplacer les expressions qui lui sont dédiées par exemple 

`{{2+2}}`

va être remplacé par Angular par la valeur qu'il va calculer. 
 

##Notions de directive

1. Lorsque le DOM trouve une balise qu'il ne connait pas, il la crée comme une <div>.
2. Ca fonctionne de la même façon pour le attributs. 


C'est ce qu'on appelle les directives, on a des directives dans Angular et on a aussi la possibilité de créer nous-mêmes de directives. 


**Attention 

`{{ 2 + 2 }}`-> c'est le **template** à l'intérieur le `2+2` est appelé **expression**

Il faut donc apprendre 
	- les expressions 
	- les directives 