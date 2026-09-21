// Creates a multiplication table from a list of primes.
function generateMultiplicationTable(primes) {
    const table = [];

    // Add the column headings.
    table.push(["", ...primes]);

    // Add each row.
    for (let row = 0; row < primes.length; row++) {
        const currentRow = [primes[row]];

        for (let column = 0; column < primes.length; column++) {
            currentRow.push(primes[row] * primes[column]);
        }

        table.push(currentRow);
    }

    return table;
}

// Formats the table so the columns line up.
function formatTable(table) {
    return table
        .map(row => row.join("\t"))
        .join("\n");
}

// Makes functions available outside of table.js
module.exports = {
    generateMultiplicationTable,
    formatTable
};