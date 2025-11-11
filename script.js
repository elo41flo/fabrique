function search_resource() {
    // 1. On récupère ce que l'utilisateur a écrit
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase(); // On met tout en minuscule pour comparer facilement

    // 2. On récupère les cartes
    // On essaie d'abord avec 'sites_ressources'
    let cards = document.getElementsByClassName('sites_ressources');
    
    // 3. SI ON N'EN TROUVE AUCUNE (c'est qu'on est sur l'autre page)
    if (cards.length === 0) {
        // Alors on cherche les 'sites_docs'
        cards = document.getElementsByClassName('sites_docs');
    }
    
    // 4. Le reste de ta boucle (ne change pas)
    for (let i = 0; i < cards.length; i++) { 
        // On cherche le titre h2 à l'intérieur de la carte
        let title = cards[i].getElementsByTagName('h2')[0];
        
        // Si le texte du titre contient ce qu'on a tapé
        if (title.innerHTML.toLowerCase().includes(input)) {
            cards[i].style.display = ""; // On affiche (par défaut)
        } else {
            cards[i].style.display = "none"; // Sinon, on cache
        }
    }
}