let liste = [
    "Nikola Lozina",
    "Guillaume Russo",
    "Le Poussin Piou",
    "Clara Morgane",
    "Zlatan",
    "Angelina Jolie",
    "Michel Sardou",
    "Michelle Obama",
    "Jean-Marc Morandini"
]

let randomNumber;
let button = document.getElementById("button");
let perso = document.getElementById("perso");

document.getElementById("button").onclick = function () {
    changePerso()
}

let randomPerso = () => {
    let i = Math.floor(Math.random() * liste.length)
    randomNumber = i;
}

let changePerso = () => {
    randomPerso();
    perso.innerHTML = liste[randomNumber]
}

// button.onclick = () => {
//     changePerso();
// }