function bisextile(annee) {
    if (typeof annee !== 'number' || !Number.isInteger(annee)) {
        console.warn('bisextile: le paramètre doit être un entier (année)');
        return false;
    }
    return (annee % 4 === 0) && (annee % 100 !== 0 || annee % 400 === 0);
}

window.bisextile = bisextile;

console.log('bisextile(2000) ->', bisextile(2000));
console.log('bisextile(1900) ->', bisextile(1900));
console.log('bisextile(2024) ->', bisextile(2024));
console.log('bisextile(2023) ->', bisextile(2023));
console.log('bisextile(2025) ->', bisextile(2025));
alert("Hello Javascript!");
console.log("Hello Javascript!");

function afficherjourssemaines() {
    const jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    for (let i = 0; i < jourssemaines.length; i++) {
        console.log(jourssemaines[i]);
    }
}

window.afficherjourssemaines = afficherjourssemaines;

console.log('Affichage des jours de la semaine :');
afficherjourssemaines();