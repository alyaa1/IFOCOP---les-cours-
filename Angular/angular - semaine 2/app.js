

angular.module('monModule', [])

angular.module('monModule').controller('nomDuControlleur', ['$scope', function(objetCorrespondantAuContexte){
  objetCorrespondantAuContexte.propriete = 'hello';
  objetCorrespondantAuContexte.boite = {
    message: 'ceci est un message'
  }
}])


angular.module('monModule').directive('maDirectiveAMoi', function(){
  var monObjet = {
    restrict : 'AC',
    template : '<h3> je suis une div créée par Angular'
  };
  return monObjet;
})

angular.bootstrap(window.document, ['monModule'], {strictDi: true})
