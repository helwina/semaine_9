$add = document.getElementById("add");
$list = document.getElementById("list");
$remove = document.getElementById("remove");
$texte = document.getElementById("text");

tableau = ["bilbo", "jeremy", "rouge", "voiture", "babar"];

function afficherListe(){
    elements = "";
    for (i = 0 ; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $list.innerHTML = elements;
}

function add(){
    tableau.push($texte.value);
    afficherListe()
}

function remove(){
    tableau.pop();
    afficherListe()
}

$remove.onclick = remove;
$add.onclick = add;
afficherListe();