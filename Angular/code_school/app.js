(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;

  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'une trés jolie gemme brillante',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Une gemme brillante à 5 côtés',
      canPurchase: true,
      soldOut: false
    }
  ];


})();
