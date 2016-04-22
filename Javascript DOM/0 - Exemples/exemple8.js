var carre = {
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
    this.HTMLElement.style.backgroundColor = 'blue';
    this.HTMLElement.style.width = '100px';
    this.HTMLElement.style.height = '100px';
    this.HTMLElement.style.left = '0px';
    return this;
  },
  decalage: function(){
    this.HTMLElement.style.left = parseFloat(this.HTMLElement.style.left) + 2 + 'px';
    return this;
  },
  animate: function(){
    var contexte = this;
    this.idTimeout = window.setTimeout(function(){
      contexte.decalage().animate();
    }, 200);
    return this;
  },
  stop: function(){
    window.clearTimeout(this.idTimeout);
    return this;
  }
};

window.addEventListener('DOMContentLoaded', function(){
  carre.create().addCSSStyle();

  window.addEventListener('click', function(){
    carre.animate();
  });

  window.addEventListener('keypress', function(){
    carre.stop();
  });

});