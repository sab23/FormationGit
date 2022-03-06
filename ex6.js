function listFilm (){
    film = ["Matrix 4", "Harry Potter 3", "La reine des neiges", "Raiponce"];
    for (i in film) {
        if (film[i]=="Matrix 4"){
        return ("Emplacement = " + film[i+1]);
        }
    }
}
console.log(listeFilm());