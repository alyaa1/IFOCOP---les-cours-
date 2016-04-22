var dragNDrop = function(){
  var autreCarre = {
    clique: false,
    idTimeout: null,
    HTMLElement: null,
    create: function(){
      if (!this.HTMLElement) {
        this.HTMLElement = window.document.createElement('div');
        window.document.body.appendChild(this.HTMLElement);
      };
      return this;
    },
    addCSSStyle: function(){
      this.create();
      this.HTMLElement.style.position = 'absolute';
      this.HTMLElement.style.backgroundColor = 'red';
      this.HTMLElement.style.width = '100px';
      this.HTMLElement.style.height = '100px';
      this.HTMLElement.style.left = '100px';
      return this;
    },
    decalageXY:function(x, y){
      if(this.clique){
        this.HTMLElement.style.left = x - parseFloat(this.HTMLElement.style.width)/2 + 'px';
        this.HTMLElement.style.top = y - parseFloat(this.HTMLElement.style.height)/2 + 'px';
      }
    }
  };

  autreCarre.create().addCSSStyle();

  window.addEventListener('mousedown', function(evtSouris){
    autreCarre.clique = true;
  });

  window.addEventListener('mouseup', function(evtSouris){
    autreCarre.clique = false;
  });

  window.addEventListener('mousemove', function(evtSouris){
    autreCarre.decalageXY(evtSouris.clientX, evtSouris.clientY);
  });

  return autreCarre;
};

window.addEventListener('DOMContentLoaded', function(){

  var autreCarre = dragNDrop();

});