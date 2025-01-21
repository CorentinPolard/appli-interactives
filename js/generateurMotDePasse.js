const generer = document.querySelector("#generer");

function motDePasse(length) {
    let tab = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const majuscules = alphabet.toUpperCase();
    const chiffres = "0123456789";
    const speciaux = ":.+-[]*~_#!?$%^()&={}|/";

    const composants = [alphabet];
    if (document.querySelector("#majuscule").checked) {
        composants.push(majuscules);
    }
    if (document.querySelector("#chiffre").checked) {
        composants.push(chiffres);
    }
    if (document.querySelector("#special").checked) {
        composants.push(speciaux);
    }

    for (let car = 0; car < length; car++) {
        const set = composants[Math.floor(Math.random() * composants.length)];
        tab.push(set[Math.floor(Math.random() * set.length)]);
    }

    const mdp = tab.join('');
    document.querySelector("#motDePasse").innerHTML = mdp;
    return mdp;
}

generer.addEventListener("click", () => motDePasse(document.querySelector("#longueur").value))