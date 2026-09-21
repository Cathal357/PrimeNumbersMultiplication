// Checks whether a number is prime.
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

// Generates the first N prime numbers.
function generatePrimes(n) {
    const primes = [];
    let number = 2;

    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number);
        }

        number++;
    }

    return primes;
}

// Makes functions available outside of prime.js
module.exports = {
    isPrime,
    generatePrimes
};