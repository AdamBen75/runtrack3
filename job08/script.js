function isPrime(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommenombrespremiers(a, b) {
    if (isPrime(a) && isPrime(b)) {
        return a + b;
    }
    return false;
}

window.sommenombrespremiers = sommenombrespremiers;

console.log('sommenombrespremiers(3, 5) ->', sommenombrespremiers(3, 5));
console.log('sommenombrespremiers(4, 5) ->', sommenombrespremiers(4, 5));
console.log('sommenombrespremiers(17, 19) ->', sommenombrespremiers(17, 19));
console.log('sommenombrespremiers(2, 2) ->', sommenombrespremiers(2, 2));
