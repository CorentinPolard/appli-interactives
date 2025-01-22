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

    if (composants.length > 1) {
        for (let set of composants) {
            tab.splice((Math.floor(Math.random() * tab.length)), 0, set[Math.floor(Math.random() * set.length)]);
        }
    }

    while (tab.length < length) {
        const set = composants[Math.floor(Math.random() * composants.length)];
        tab.push(set[Math.floor(Math.random() * set.length)]);
    }

    const mdp = tab.join('');
    document.querySelector("#motDePasse").innerHTML = mdp;
    return mdp;
}

generer.addEventListener("click", () => motDePasse(document.querySelector("#longueur").value))