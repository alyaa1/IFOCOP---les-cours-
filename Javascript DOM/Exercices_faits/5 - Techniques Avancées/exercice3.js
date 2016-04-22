window.addEventListener('DOMContentLoaded', function(){
  var urlCourante = window.location.hash;
  var liste = document.getElementsByTagName('li');

  function addListener(target){
    for(var i = 0; liste[i]; i++){
      liste[i].addEventListener('click', function(){
         var ancreCible = this.firstChild.hash.substr(1);
         console.log(ancreCible)
         var paragraphe = document.getElementById(ancreCible);
         paragraphe.style.color = 'red';
      });
    };
  };

  addListener(liste);

});
