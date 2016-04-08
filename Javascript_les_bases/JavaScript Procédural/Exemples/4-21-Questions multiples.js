//Un nombre fixé de questions grâce à une boucle dans
  var demande = function(message){
    var saisie;
    while (isNaN(saisie)) {
      saisie = parseFloat(prompt(message));
    }
    return saisie;
  };


  var deuxQuestions = function(){
    var textesQuestions = ['premier','second','troisième','quatrième','cinquième'];
    var resultat = 0;
    for(var i=0; textesQuestions[i];i++){
      resultat = resultat + demande('Veuillez saisir un ' +  textesQuestions[i] + ' nombre');
    }
    alert(resultat);
  };

//Une fonction qui pose le nombre de questions fixé
  var reponsesDansUnTableau = function(nombreDeQuestions){
    var tableauReponses = [];
    for (var i=0;i<nombreDeQuestions;i++) {
      var saisie;
      while (isNaN(saisie)) {
        saisie = parseFloat(prompt(message));
      }
      tableauReponses[i] = saisie;
    }
    return tableauReponses;
  };
