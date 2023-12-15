const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resulat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur;



// Evenement 'Click sur les buttons '

choixPossibles.forEach((choixPossible) => choixPossible.addEventListener('click', (e) => {
  // Recuperation de l'ID de button
 
  choixUtilisateur = e.target.id;

  contenantChoixUtilisateur.innerHTML = `<img src = "${choixUtilisateur}.jpeg">`
  generer_choix_ordinateur()
  verification()
}))

// function pour generer le choix de l'ordinateur :

function generer_choix_ordinateur() {
  random = Math.floor(Math.random() * 3 + 1  )  // generer des nombre generer entre 1 et 3.

  if (random === 1) {
      choixOrdinateur = "pierre"
  }

  else if (random === 2) {
    choixOrdinateur = "ciseau"
  }
  else if (random === 3) {
    choixOrdinateur = "papier"
  }
  contenantChoixOrdinateur.innerHTML = `<img src = "${choixOrdinateur}.jpeg">`
}

// function pour verifie si le joueur a gagne ou pas !

function verification() {
  if (choixUtilisateur == choixOrdinateur) {
    resultat = 'Egalité !'
     } 
    // Le cas ou le joueur perd :
    else if (choixUtilisateur === 'pierre' && choixOrdinateur === 'papier' || choixUtilisateur === 'papier' && choixOrdinateur === 'ciseau' || choixUtilisateur === 'ciseau' && choixOrdinateur === 'pierre' ) {
      resultat = 'Perdu ! '
    }
 

  // Le cas ou le joueur gagne : 

  if (choixUtilisateur === 'papier' && choixOrdinateur === 'pierre' ) {
    resultat = 'Gagné ! '
  }

  else if (choixUtilisateur === 'ciseau' && choixOrdinateur === 'papier') {
    resultat = 'Gagné ! '
  }

  else if (choixUtilisateur === 'pierre' && choixOrdinateur === 'ciseau') {
    resultat = "Gagné ! "
  }

  
  contenantResultat.innerHTML = resultat;
};


