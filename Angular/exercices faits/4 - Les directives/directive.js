angular.module('monModule', []);

var maDir = angular.module('monModule');

maDir.directive('maDirective', function(){
  return {
    restrict : 'EA',
    template:'<h4>Bonjour je suis une directive personnalisée</h4>'
  };
});


maDir.directive('maDirective2', function(){
  return {
    restrict : 'EA',
    templateUrl: 'test.html'
  };
});

maDir.directive('maDirective3', function(){
  return {
    restrict : 'EA',
    template: '{{monCtrl.test}} <br /> {{monCtrl.maListe[1].nom}}<ul ng-repeat="objet in monCtrl.maListe" ><li><strong>{{objet.nom}}</strong></li></ul>',
    controller: [function(){
      this.test = 'coucou du controleur',
      this.maListe = [{nom :'objet1'},{nom :'objet2'},{nom :'objet3'}]
    }],
    controllerAs:'monCtrl',

  };
});



angular.bootstrap(window.document, ['monModule'], {strictDi:true});
