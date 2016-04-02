#Les bases du Javascript


**objectif :**
  - apprendres les fondements de l'algorythmie
  - les bases du langage Javascript


##Historique du Javascript

**Brendan Eich** a inventé le javascript pour créer des animations dans le navigateur.

Arrivée du javascript en 1995.

Au départ le langage s'appelait jscript.

C'est Oracle qui a renommé ce langage en javascript pour créer une gamme de produit proche du java.

Une des grande différence est que le javascript est lié au navigateur (contrairement au java qui fonctionne dans une machine virtuelle).


Le standard est nommé ECMAScript (premier standard en 1997).


##L'échange de données
le XML qui gère l'échange de données, on le retrouve par exemple dans le RSS.

Douglas Crockfort a inventé le **JSON** _javascript object notation_ qui a le même rôle.
Le JSON est très efficace dans l'organisation de données (il y'a peu de différence de taille entre un fichier brut et un fichier organisé en JSON).


##Les avantages du javascript

C'est un langage léger.
Il est déporté côté client donc il demande moins de ressources côté serveur.


##Premières lignes de codes

Pour insérer du code javascript il faut ajouter les balises `<script> </script>` dans la page.



On peut :

* intégrer directemnet le code dans la page
* ou faire appel à un fichier `.js` externe avec le code

```
<script type="text/javascript" src="../monscript.js"></script>
```


**A noter** : le javascript est sensible à la **casse**


###noscript

on peut utiliser une balise `<noscript>` qui permet de détecter que le javascript n'est pas activé dans le navigateur.


###les commentaires

- sur une seule ligne `// je suis un commentaire`
- sur plusieurs lignes `/* je suis un commentaire sur plusieurs lignes*/`

###les variables

On déclare une variable avec
`var maVariable`

**il faut utiliser le camelCase** pour pouvoir relire facilement le nom de cette variable.

####les valeurs

1 - un nombre

  `var unNombre = 15;`

  on peut ensuite changer la valeur de cette variable `unNombre = -12; `


  on peut aussi déclarer des nombres flottants :
  `var flottant = 11.12;`


  2- une chaîne de caractère - **string**

  `var string = 'Bonjour';`
  comme on utilise des guillemets simples il faut échapper les guillemets s'ils apparaissent dans la valeur

  `'var longString = 'aujourd\'hui nous sommes le 1er avril';`
