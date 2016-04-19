#Javascript cours 3

>19 avril 2014


```
//Gestionnaire d'événement
var reactionAuClick = function(evtSouri){
  console.log('firefox exécute cette fonction');
};
  //e représente ce qu'on s'attend à recevoir de la part de la fonction


//attacher le gestionnaire d'événement au click
window.addEventListener('click', reactionAuClick)

//détacher le gestionnaire d'événement au click
window.removeEventListener('click', reactionAuClick)


```



Certains événements ne peuvent être écoutés qu'avec **.addEventListener**


```
window.addEventListener('DOMContentLoaded', function(evt))

```

Sur la *MDN* Events -> liste tous les événemnts qu'il est possible d'écouter.


**addEventListener** n'est disponible que sur les navigateur issus de netscape.
Donc ce n'est pas disponible sur IE avant la version 9.
On doit donc utilser la méthode **.attachEvent()**

on fait donc un test

```
if (window.addEventListener){
  //ici je sais que je suis sur netscape family window.addEventListener('DOMContentLoaded', function(evt));
}else{
  //ici je sais que je suis sur IE
  if (window.attachEvent){
    window.attachEvent('DOMContentLoaded', function(evt));
  }else{
    //je sais que je ne sais pas gérer les événement
  }
```


###Evenement molette de la souris

- Sur Firefox : **DOMMouseScroll**
- Sur IE6 / IE 7 : **mousewheel**
- Sur Chrome / Opera / Safari : **mousescroll**




#Design Pattern

##Les fonctions usines

```
var nouvelleRono = function() {
  var chassis = function() {
    this.roueAvantGauche = true;
    this.roueAvantDroite = true;
    this.roueArriereGauche = true;
    this.roueArriereDroite = true;
    this.arbreDeTransmissin = true;
    this.moteur = true;
  };

  var Voiture = function(modele, couleur){
    this.modele = modele;
    this.couleur = couleur;
    this.marque = 'Rono';
  };

  Voiture.prototype = new Chassis();

  var voiture = new Voiture (m,c);

  return voiture;
}

var maVoiture = nouvelleRono('R5','Rouge');
```


##Le chaînage de fonctions


```
var yannick = {
  premiereParole: function(){
    window.alert('ces soirées-là');
    return this;
  }
  deuxiemeParole: function(){
    window.alert('on drague on branche');
    return this;
  }
  troisiemeParole: function(){
    window.alert('ces soirées-là');
    return this;
  }

}

Yannick.premiereParole().deuxiemeParole().troisiemeParole();
```

Ainsi, en renvoyant `this`, la fonction 1 permet à la fonction 2 de s'exécuter, d'où le nom de **chaînage**.


##L'injection de dépendance 

```
A revoir ! dans les exemples 
```
