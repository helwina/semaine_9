$liste = document.getElementById("liste");
$remove = document.getElementById("remove");
$restore = document.getElementById("restore");

function select(e) {    //donne une class selected aux elements selectionne
    e.target.classList.toggle("selected");
}

function remove() {     //donne la class trash aux elements avec la class selected
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("trash");
        }
    }
}

function restore() {    //suprime la class trash et selected
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("trash");
        $liste.children[i].classList.remove("selected");
    }
}

$liste.onclick = select;
$remove.onclick = remove;
$restore.onclick = restore;