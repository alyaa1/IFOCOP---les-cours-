#Les controlleurs Angular

 
##Les contextes, les contrôleurs et la directive ng-controller 

        
Le contexte applicatif principal d'AngularJS ("root scope", `objet $rootScope`) est un objet qui fournit un **contexte d'exécution** pour toutes les expressions AngularJS utilisées dans un document Web. La documentation officielle de l'objet $rootScope est disponible ici : [https://docs.angularjs.org/api/ng/service/$rootScope](https://docs.angularjs.org/api/ng/service/$rootScope)

Le rôle de cet objet est de servir d'**interface** entre les **données** (qu'on appelle **modèles**) créées par exemple à l'aide d'expression et l'affichage (qu'on appelle **vue**) matérialisé par le code source HTML.

On pourrait utiliser le contexte applicatif principal d'AngularJS comme on l'a fait dans la première série d'exercices mais on se rend bien compte que, plus on utilise d'expressions dans le code HTML, **moins l'application est lisible, modulaire et maintenable**.
        
Pour pallier à cela, AngularJS créé des contextes enfants ("child scopes", objet $scope). **Ces contextes enfants sont des objets qui héritent** (par prototypage) du contexte applicatif principal d'AngularJS. La hiérarchie des contextes enfant se superpose à celle du DOM. La documentation officielle concernant les objets "scope" est disponible ici : [https://docs.angularjs.org/guide/scope](https://docs.angularjs.org/guide/scope). 

Pour spécialiser les contextes enfant, on utilisera des **fonctions constructeur** qu'on appelle **contrôleurs**. Le rôle des contrôleurs sera de définir l'ensemble des propriétés et des méthodes d'un contexte enfant. En d'autre termes, plutôt que d'initialiser ou de déclarer des variables dans le contexte principal en utilisant des expressions comme dans la première série d'exercice, nous le ferons dans les contrôleurs et uniquement pour certaines partie du DOM.

On peut utiliser les contrôleurs de deux façons :

1. Soit pour spécialiser un contexte enfant (objet $scope) fourni par AngularJS (ancienne technique : Angular JS <= 1.2).

2. Soit pour définir les propriété et méthodes d'un objet qu'on peut ensuite utiliser dans le contexte enfant. (nouvelle technique : Angular > 1.2, recommandée).

Le document ci-après utilise la directive **ng-controller** pour :

- spécialiser un contexte enfant (i.e un objet "$scope"). Le contrôleur de la directive ng-controller est déclaré dans le code JavaScript après la déclaration du contexte applicatif. Il se compose d'une fonction constructeur qui définit une propriété du CONTEXTE ENFANT. Cette propriété est ensuite affichée dans la div à l'aide d'un expression.

- définir les propriété et méthodes d'un contexte enfant dont le nom d'instance est imposé. La directive ng-controller s'appuie sur l'expression "controller as". Le contrôleur de la directive ng-controller est déclaré dans le code JavaScript après la déclaration du contexte applicatif. Il se compose d'une fonction constructeur qui définit une propriété du CONTROLEUR. Cette propriété est ensuite affichée dans la div à l'aide d'un expression.

La directive **ng-controller** est documentée ici : [https://docs.angularjs.org/api/ng/directive/ngController](https://docs.angularjs.org/api/ng/directive/ngController)
