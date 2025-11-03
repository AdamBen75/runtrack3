
function tri(numbers, order = 'asc') {
    if (!Array.isArray(numbers)) {
        console.warn('tri: le premier argument doit être un tableau');
        return false;
    }

    if (order !== 'asc' && order !== 'desc') {
        console.warn("tri: le paramètre 'order' doit être 'asc' ou 'desc' — utilisation de 'asc' par défaut");
        order = 'asc';
    }

    const arr = numbers.slice();

    arr.sort((a, b) => {
        const na = Number(a);
        const nb = Number(b);

        const aNaN = Number.isNaN(na);
        const bNaN = Number.isNaN(nb);
        if (aNaN && bNaN) return 0;
        if (aNaN) return 1;
        if (bNaN) return -1;

        return order === 'asc' ? na - nb : nb - na;
    });

    return arr;
}

window.tri = tri;

// Démonstrations
console.log('tri([5,2,9,1,5,6], "asc") ->', tri([5,2,9,1,5,6], 'asc'));
console.log('tri([5,2,9,1,5,6], "desc") ->', tri([5,2,9,1,5,6], 'desc'));
console.log('tri(["3", 2, "10", 1], "asc") ->', tri(["3", 2, "10", 1], 'asc'));
console.log('tri([1,2,NaN,5], "asc") ->', tri([1,2,NaN,5], 'asc'));
