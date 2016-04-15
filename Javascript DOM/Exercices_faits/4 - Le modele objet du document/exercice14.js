'use strict';

  // mer variables
  var elementMargin = parseFloat( document.getElementsByTagName('h1')[0].style.marginTop);


  timerDecrease();


  function timerDecrease() {
    if (isNaN(elementMargin)){
      setMargin();
    }if(elementMargin < 100){
      window.setTimeout(function(){
      addMargin();},100);
    }
  };

  // function timerIncrease(){
  //   if(elementMargin > 0){
  //     window.setTimeout(function(){
  //     reduceMargin();},100);
  //   }else{
  //     timerDecrease();
  //   }
  // }

    function setMargin(){
      document.getElementsByTagName('h1')[0].style.position = 'absolute';
      elementMargin = 1;
      attributeMargin();
      addMargin();
    };

    // function reduceMargin() {
    //     elementMargin -= 1;
    //     attributeMargin();
    //     timerIncrease();
    // };

    function addMargin() {
        elementMargin += 1;
        attributeMargin();
        timerDecrease();
      };


    function attributeMargin(){
      document.getElementsByTagName('h1')[0].style.marginTop = elementMargin + 'px';
    };
