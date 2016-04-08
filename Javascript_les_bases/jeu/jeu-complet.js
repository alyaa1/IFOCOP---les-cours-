//éléments disponibles pour le jeu :
			var elements = ['pierre','feuille','ciseaux'];
			//variables pour les scores
			var scoreJoueur = 0;
			var scoreOrdinateur = 0;
			//variables pour l'affichage du résultat à chaque tour et du score
			var affichageResultat;
			var score;
			var toursDeJeu = 16;
			var numeroTour= 0;
			var messageDebut = function(){
				resultat('<p>Bienvenu<br/>Débutez la partie ! </p>');
			};
			//tour de jeu
			var tour = function(){
				if(numeroTour <= toursDeJeu){
					numeroTour++;
					//1--- Réponses ---
					var reponseOrdinateur = elements[nombreAleatoire()-1];

						affichageResultat = '<h2>Résultat du tour</h2><p>';
					/*2--- Comparaison entre joueur et ordinateur avec préparation du texte et comptage des points ---
					Il y a trois cas possibles :
						a) même réponse => égalité
					*/
					if(reponse == reponseOrdinateur){
						affichageResultat = 'Vous aves choisi, comme l\'ordinateur, ' + reponse + '\n Il y a égalité, le score ne change pas.';
					}
					else{
					/*
						b) Si les combinaisons joueur / ordinateur sont : 1/3 (pierre/ciseaux) - 2/1 (feuille/pierre) - 3/2 (ciseaux/feuille) => le joueur gagne
					*/
						if((reponse=='pierre' && reponseOrdinateur=='ciseaux') ||(reponse=='feuille' && reponseOrdinateur=='pierre') ||(reponse=='ciseaux' && reponseOrdinateur=='feuille')){
							scoreJoueur++;
							affichageResultat = 'Vous avez choisi ' + reponse + ' et l\'ordinateur ' + reponseOrdinateur + '. <br/> Vous avez gagné le tour.';
						}
					/*
						c) Sinon l'ordinateur gagne
					*/
						else{
							scoreOrdinateur++;
							affichageResultat = 'Vous avez choisi ' + reponse + ' et l\'ordinateur ' + reponseOrdinateur + '. <br/> Vous avez perdu le tour.';
						}
					}
					/*
					3 Préparation de l'affichage du score
					*/
					var texteScore = function(){
						return '</h2><p>Vous avez ' + scoreJoueur + ' point(s) et l\'ordinateur ' + scoreOrdinateur + ' point(s).</p>';
					}

					if(numeroTour == toursDeJeu){
						affichageResultat += '</p><h2>Score final' + texteScore();
						if(scoreJoueur > scoreOrdinateur){
							affichageResultat += '<h1>Vous avez gagné la partie</h1>';
						}
						else{
							if(scoreJoueur < scoreOrdinateur){
								affichageResultat += '<h1>Vous avez perdu la partie</h1>';
							}
							else{
								affichageResultat += '<h1>Vous terminez la partie sur une parfaite égalitée </h1>';
							}
						}
					}
					else{
						affichageResultat += '</p><h2>Scores' + texteScore();
					}
					/*
					4 Affichage du résultat partiel ou final
					*/
						resultat(affichageResultat);
				}else{
					resultat('<p style="color:red; font-size: 24px; ">Partie terminée</p>' + affichageResultat);
				}
			};
