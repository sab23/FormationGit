function pays() {
    nbHabitant = [10000000, 500000, 3000000, 500000000, 62000000];
    i = 0;
    n = 0;
    nbTotal = 0

    for (i in nbHabitant){
        if (nbHabitant[i]>10000000){
            n=n+1;
        }
    }
    for (i in nbHabitant){
        nbTotal = nbHabitant[i]+nbHabitant[i+1];
    }
    for (i in nbHabitant){
        moyenne = nbHabitant[i]
    }

    return ("Nombre d'habitant total = " + nbTotal + " Nombre d'habitants en moyenne = " + moyenne + " Nombre de pays avec plus de 10 000 000 d'habitant = " + n);
}
console.log(pays());