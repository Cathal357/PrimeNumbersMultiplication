const test = require("node:test");
const assert = require("node:assert");
const { isPrime, generatePrimes } = require("../src/prime");

test("2 is prime", () => {
    assert.strictEqual(isPrime(2), true);
});

test("4 is not prime", () => {
    assert.strictEqual(isPrime(4), false);
});

test("1 is not prime", () => {
    assert.strictEqual(isPrime(1), false);
});

test("generates the first 5 prime numbers", () => {
    assert.deepStrictEqual(
        generatePrimes(5),
        [2, 3, 5, 7, 11]
    );
});