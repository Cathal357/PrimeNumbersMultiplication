const readline = require("node:readline");

const { generatePrimes } = require("./prime");
const {
    generateMultiplicationTable,
    formatTable
} = require("./table");

// Creates the interface for receiving input from the user.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gets N from the user and generates the multiplication table.
rl.question("Enter the number of primes to generate: ", input => {
    const n = Number(input);

    // Checks that N is a whole number of at least 1.
    if (!Number.isInteger(n) || n < 1) {
        console.log("Please enter a whole number, greater than or equal to 1.");
        rl.close();
        return;
    }

    // Generate the primes and multiplication table.
    const primes = generatePrimes(n);
    const table = generateMultiplicationTable(primes);

    // Display the table.
    console.log(formatTable(table));

    rl.close();
});