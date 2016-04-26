/******************************************************************************
                        squelette d'un plugin jQuery
        on entre une nouvelle méthode dans la propriété fn de jQuery
*******************************************************************************/

jQuery.fn.monPlugin = function(parametre){

}


//Gérer les conflits.
//on déclare une fonction anonyme

(function ($){
  jQuery.fn.monPlugin = function(parametre){

  };

})(jQuery);


//Gérer la valeur de retour

(function ($){
  jQuery.fn.monPlugin = function(parametre){
    //permet de balayer tous les éléments qui sont passés
    this.each(function(){

    });
  return this;
  };

})(jQuery);

//

(function ($){
  jQuery.fn.monPlugin = function(parametre){
    //permet de balayer tous les éléments qui sont passés
    this.each(function(){
      this.css('color',parametre);
    });
  return this;
  };

})(jQuery);


// pour appeler le plugin

  $('elementACibler').monPlugin(param);//param est optionnel
