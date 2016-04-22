window.addEventListener('DOMContentLoaded', function(){
    var animation = function() {
        window.setTimeout(function(){
            if(document.getElementById('cool')){
                ajouteRect(valeursCreationRect());
                animation();
            }else{
                createCanvas(300,300)
                ajouteRect(valeursCreationRect());
                animation();
            };
        },200);
    };

    window.requestAnimationFrame(animation);

    var valeur = [0,0,20,20]

    var valeursCreationRect = function(){
        valeur[0] += Math.abs(getRandomIntInclusive(-10,10));
        valeur[1] += Math.abs(getRandomIntInclusive(-10,10));
        console.log('x = ' + valeur[0] + ' y = ' + valeur[1]);
        return valeur;
    };

    var createCanvas = function(width, height){
      var canvas =  document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.id = 'cool';
      canvas.style.backgroundColor = 'gray';
      var titre = document.getElementsByTagName('h1')[0];
      titre.appendChild(canvas);
    }

    var ajouteRect = function(valeurs){
      var x = valeurs[0];
      var y = valeurs[1];
      var width = valeurs[2];
      var height = valeurs[3];
      var canvas = document.getElementById('cool');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (x,y,width,height);
    };

    var getRandomIntInclusive = function(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
});
//
//


// mesParagraphes[0].addEventListener('click',function(){
//   if(document.getElementById('cool')){
//     ajouteRect(valeursCreationRect());
//   }else{
//     createCanvas(300,300)
//     ajouteRect(valeursCreationRect());
//     };
// });
