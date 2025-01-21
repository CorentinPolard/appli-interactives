const generer = document.querySelector("#generer");

function motDePasse(length) {
    let tab = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const majuscules = alphabet.toUpperCase();
    const chiffres = "0123456789";
    const speciaux = ":.+-[]*~_#!?$%^()&={}|/";

    let composants = [];

    for (let car = 0; car < length; car++) {
        if (document.getElementById("majuscule").checked && document.getElementById("chiffre").checked && document.getElementById("special").checked) {
            composants.push(alphabet, majuscules, chiffres, speciaux); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("majuscule").checked && document.getElementById("chiffre").checked) {
            composants.push(alphabet, majuscules, chiffres); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("majuscule").checked && document.getElementById("special").checked) {
            composants.push(alphabet, majuscules, speciaux); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("chiffre").checked && document.getElementById("special").checked) {
            composants.push(alphabet, chiffres, speciaux); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("majuscule").checked) {
            composants.push(alphabet, majuscules); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("chiffre").checked) {
            composants.push(alphabet, chiffres); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else if (document.getElementById("special").checked) {
            composants.push(alphabet, speciaux); 
            num = Math.floor(Math.random() * composants.length);
            tab.splice(Math.floor(Math.random() * tab.length), 0, composants[num][Math.floor(Math.random() * composants[num].length)])
        }
        else {
            tab.push(alphabet[Math.floor(Math.random() * 26)])
        }
    }

    let mdp = "" ;
    
    for (let car of tab) {
        mdp += car;
    }

    const affichage = document.querySelector("#motDePasse");
    affichage.innerHTML = mdp;
    return mdp;
}



generer.addEventListener("click", () => motDePasse(document.getElementById("longueur").value))