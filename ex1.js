function nbNote(){
    note = [12, 8, 17, 9];
    i = 0;
    n=0;
    for (i in note)
    {
        if (note[i]>10){
        n = n+1;
        }
    }return n;
}

console.log(nbnote());