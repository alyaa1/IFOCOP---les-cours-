window.addEventListener('DOMContentLoaded', function(){
  var urlCourante = window.location.hash.substr(1);
  console.log('urlCourante = ' + urlCourante);
  var liste = document.getElementsByTagName('li');

  //on cree une usine à objet =


  var monUsine = function(){
      this.ancreCible = this.firstChild.hash.substr(1); //stocke le nom de l'ancre dans une variable
      this.addSpy = this.addEventListener('click', function(){
             var ancreCible = this.firstChild.hash.substr(1);
  }




  // function addListener(target){
  //   for(var i = 0; liste[i]; i++){ //parcours la liste des li et attribue un ecouteur à chacun
  //     liste[i].addEventListener('click', function(){
  //        var ancreCible = this.firstChild.hash.substr(1); //stocke le nom de l'ancre dans une variable
  //        console.log('ancreCible ' + ancreCible)
  //        var paragraphe = document.getElementById(ancreCible); //cherche la variable ancreCible dans les ID du documents
  //
  //        paragraphe.nextElementSibling.style.color = 'red';
  //
  //
  //
  //
  //        return ancreCible;
  //     });
  //   };
  // };
  //
  // addListener(liste);
  //
  // var testAncre = function(){
  //   if (urlCourante == addListener){
  //   console.log('les 2 ancres sont identiques')
  //   };
  // };

});


/*****************************************************************************
A FAIRE

Créer un objet avec les propriétés nécessaires

Créer une fonction qui analyse le DOM pour savoir combien d'objets il faut créer.

******************************************************************************/
