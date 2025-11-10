function search_resource() {
        // 1. On récupère ce que l'utilisateur a écrit
        let input = document.getElementById('searchbar').value;
        input = input.toLowerCase(); // On met tout en minuscule pour comparer facilement

        // 2. On récupère toutes les cartes de ressources
        let cards = document.getElementsByClassName('sites_ressources');
        
        // 3. On boucle sur chaque carte pour vérifier le titre
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