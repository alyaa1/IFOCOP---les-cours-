window.addEventListener('DOMContentLoaded', function(){

  function resetStyles(){
    var mesP = document.getElementsByTagName('p');
    for (var i = 0; mesP[i]; i++){
      mesP[i].style.color = 'black';
    };
  };

  function changeStyle(ancreCible){
    resetStyles();
    var paragraphe = document.getElementById(ancreCible); //cherche la variable ancreCible dans les ID du documents
    paragraphe.nextElementSibling.style.color = 'red';
  };


  function observateurAncre(){
    var urlCourante = window.location.hash.substr(1);
    if (urlCourante){
        resetStyles();
        changeStyle(urlCourante);
      }
    window.requestAnimationFrame(observateurAncre)
  };

  window.requestAnimationFrame(observateurAncre)


});


/*****************************************************************************
A FAIRE

Créer un objet avec les propriétés nécessaires

Créer une fonction qui analyse le DOM pour savoir combien d'objets il faut créer.

******************************************************************************/
