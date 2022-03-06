function search() {
    const searchPrenom = "Jean";
    const searchNom = "Dupont";
    const bonjour = "Bonjour Jean Dupont";

    search1 = bonjour.indexOf(searchPrenom);
    search2 = bonjour.indexOf(searchNom);

    return (search1, search2);
}
console.log(search());
