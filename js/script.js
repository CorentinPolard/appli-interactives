function pierreFeuilleCiseaux() {
    const affichage = document.querySelector(".affichage");
    const choixAvatar = document.querySelector(".choixAvatar");
    const choix = [["Pierre", "./images/pierre.svg"], ["Feuille", "./images/feuille.svg"], ["Ciseaux", "./images/sciseaux.svg"]]; // Initialise les choix de l'ordinateur
    const index = Math.floor(Math.random() * 3); // Génère un nombre aléatoire entre 0 et 2  

    const ordi = choix[index][0]; // L'action de l'ordi

    let resultat = "";

    if (this.id === ordi) {
        resultat = "égalité !"
    }
    else if ((this.id === "Pierre" && ordi === "Feuille")
        || (this.id === "Ciseaux" && ordi === "Pierre")
        || (this.id === "Feuille" && ordi === "Ciseaux")) {
        resultat = "tu as perdu !"
    } else {
        resultat = "tu as gagné !"
    }
    affichage.innerHTML = `J'ai choisi ${ordi}, ${resultat}`;
    choixAvatar.src = choix[index][1];
    choixAvatar.classList.remove("hide");
    return;
}

const pierre = document.querySelector("#Pierre");
const feuille = document.querySelector("#Feuille");
const ciseaux = document.querySelector("#Ciseaux");

pierre.addEventListener("click", pierreFeuilleCiseaux);
feuille.addEventListener("click", pierreFeuilleCiseaux);
ciseaux.addEventListener("click", pierreFeuilleCiseaux);