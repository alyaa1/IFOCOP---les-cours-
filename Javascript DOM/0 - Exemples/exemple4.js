var maFonction = function(){
  window.document.body.children[0].innerHTML = 'test';
  window.document.body.children[0].onclick = function(){
    window.alert('Titre cliqué !');
  };
};

window.onload = function(){
  maFonction();
};