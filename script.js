function pierreFeuilleCiseaux() {
    const affichage = document.getElementById("affichage");
    const choix = ["Pierre", "Feuille", "Ciseaux"]; // Initialise les choix de l'ordinateur
    const index = Math.floor(Math.random() * 3); // Génère un nombre aléatoire entre 0 et 2  

    const ordi = choix[index]; // L'action de l'ordi

    let resultat = "";
    
    if (this.id === ordi) {
        resultat = "égalité !"
    }
    else if (this.id === "Pierre") {
        if (ordi === "Feuille") {
            resultat = "tu as perdu !"
        }
        else {
            resultat = "tu as gagné !"
        }
    }
    else if (this.id === "Feuille") {
        if (ordi === "Ciseaux") {
            resultat = "tu as perdu !"
        }
        else {
            resultat = "tu as gagné !"
        }
    }
    else {
        if (ordi === "Pierre") {
            resultat = "tu as perdu !"
        }
        else {
            resultat = "tu as gagné !"
        }
    }
    affichage.innerHTML = `J'ai choisi ${ordi}, ${resultat}`;
    return;
}

const pierre = document.getElementById("Pierre");
const feuille = document.getElementById("Feuille");
const ciseaux = document.getElementById("Ciseaux");

pierre.addEventListener("click", pierreFeuilleCiseaux);
feuille.addEventListener("click", pierreFeuilleCiseaux);
ciseaux.addEventListener("click", pierreFeuilleCiseaux);