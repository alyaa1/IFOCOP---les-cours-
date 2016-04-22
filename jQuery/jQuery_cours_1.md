#jQuery

>21 avril


*Write less, do more*



##Historique
Inventé par John Resig. 

sorti en 2007

**jQueryUI** est un plugin de jQuery


###Intérêts

- facilité d'écriture, 
- Il apporte la **compatibilité** du code javascript avec tous les
navigateurs à partir d'Internet Explorer 6.


##La compatibilité jQuery1 et jQuery2 


La version 2 n'est supporté qu'à partir de la **version 9 d'IE**.


##L'usage de jQuery

### Méthode 1


1. Télécharger la bibliothèque (n'importe quelle version).
2. Utiliser un CDN 


##Utilisation 

Dans la page HTML, on fait un appel au fichier jQuery

```
    <script type="text/javascript" src="../sources/jquery-1.12.3.js"></script>
```

Puis pour appeler jQuery, on peut utiliser : 

1. `window.jQuery`
2. `jQuery` 
3. `$`



exemple 

```
$(document).ready(function(){
	alert('Départ');
	});
```
	
Ce qu'il est ensuite possible de faire avec jQuery 

### 1. Accéder à un élément

```
$.('#cible').find('.element');
```
        


