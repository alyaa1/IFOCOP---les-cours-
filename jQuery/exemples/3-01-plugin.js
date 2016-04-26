//------Squelette d'un plugin------
  //Nous entrons une nouvelle méthode dans la propriété fn de l'objet jQuery
  jQuery.fn.monPlugin = function(parametre){

  };

//------Gérer les conflits------
  (function($){
    jQuery.fn.monPlugin = function(parametre){

    };
  })(jQuery);

//------Gérer la valeur de retour------
  (function($){
    jQuery.fn.monPlugin = function(parametre){
      //Permet de balayer tous les éléments qui sont passés
      this.each(function(){

      });
      return this;
    };
  })(jQuery);
