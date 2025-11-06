function showhide() {
    // Vérifie si l'article existe déjà
    let article = document.querySelector('article');
    
    if (article) {
        // Si l'article existe, on le supprime
        article.remove();
    } else {
        // Si l'article n'existe pas, on le crée
        article = document.createElement('article');
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

// Ajoute l'écouteur d'événement sur le bouton
document.getElementById('button').addEventListener('click', showhide);