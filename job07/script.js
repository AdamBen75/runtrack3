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

function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

window.fizzbuzz = fizzbuzz;

console.log('Exécution de fizzbuzz :');
fizzbuzz();

function jourtravaille(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
        console.warn('jourtravaille: le paramètre doit être un objet Date valide');
        return;
    }

    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    const feries2020 = new Set([
        '2020-01-01',
        '2020-04-13',
        '2020-05-01',
        '2020-05-08',
        '2020-05-21',
        '2020-06-01',
        '2020-07-14',
        '2020-08-15',
        '2020-11-01',
        '2020-11-11',
        '2020-12-25'
    ]);

    const pad = n => String(n).padStart(2, '0');
    const iso = `${annee}-${pad(mois)}-${pad(jour)}`;

    if (annee === 2020 && feries2020.has(iso)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
        return;
    }

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
        return;
    }

    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
}

window.jourtravaille = jourtravaille;

console.log('Test jourtravaille :');
jourtravaille(new Date('2020-01-01'));
jourtravaille(new Date('2020-04-13'));
jourtravaille(new Date('2020-07-11'));
jourtravaille(new Date('2020-07-13'));
jourtravaille(new Date('2019-05-01'));