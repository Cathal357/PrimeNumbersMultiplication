const test = require("node:test");
const assert = require("node:assert");

const { isPrime, generatePrimes } = require("../src/prime");

// Tests whether a number is correctly identified as prime.
test("2 is prime", () => {
    assert.strictEqual(isPrime(2), true);
});

// Tests whether a non-prime number is correctly identified.
test("4 is not prime", () => {
    assert.strictEqual(isPrime(4), false);
});

// Tests that numbers below 2 are correctly identified as non-prime.
test("1 is not prime", () => {
    assert.strictEqual(isPrime(1), false);
});

// Tests that the first 5 prime numbers are generated correctly.
test("generates the first 5 prime numbers", () => {
    assert.deepStrictEqual(
        generatePrimes(5),
        [2, 3, 5, 7, 11]
    );
});