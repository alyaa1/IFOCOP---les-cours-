var continuer = true;
//Tableau dans lequel on enregistre les villes
var villes = [];
//Compteur pour permettant de remplir le tableau
var indice = 0;
while (continuer) {
  //On demande à l'utilisateur s'il souhaite saisir une ville française ou étrangère
  var choix = confirm('Voulez-vous saisir une ville en France (OK) ou à l\'étranger (annuler) ?');
  if (choix) {
    choix = 'en France';
  } else {
    choix = 'à l\'étranger';
  }
  //On lui demande de saisir le nom de la ville
  var villeChoisie = '';
  while (villeChoisie == null || villeChoisie == '' || !isNaN(villeChoisie)) {
    villeChoisie = prompt('Donnez le nom de la ville');
  }
  //On enregistre dans le tableau l'emplacement et le nom de la ville
  villes[indice] = [villeChoisie,choix];
  //On incrémente le compteur
  indice = indice + 1;
  //On lui demande s'il souhaite saisir le nom d'une autre ville
  continuer = confirm('Voulez-vous saisir une autre ville ?');
}
//Quand il dit non, on lui donne la liste des villes avec leur emplacement
indice = 0;
while (villes[indice]) {
  alert('Ville : ' + villes[indice][0] + ' ' + villes[indice][1]);
  indice = indice + 1;
}
