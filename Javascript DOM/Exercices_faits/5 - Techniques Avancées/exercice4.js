window.addEventListener('DOMContentLoaded', function(){
  var monTitre = document.getElementsByTagName('h2')[0];
  monTitre.style.color = 'red';
  monTitre.addEventListener('click', function(){
      var appelFantome = document.createElement('script');
      appelFantome.type = 'text/javascript';
      appelFantome.setAttribute('async',false);
      appelFantome.setAttribute('src','fantome.js');
      document.head.appendChild(appelFantome);//mettre le script dans le head
      appelFantome.addEventListener('load', function(){criDuFantome()});
    }
  });








})
