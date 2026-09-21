const test = require("node:test");
const assert = require("node:assert");

const {
    generateMultiplicationTable,
    formatTable
} = require("../src/table");

test("generates a multiplication table for 2, 3 and 5", () => {
    const result = generateMultiplicationTable([2, 3, 5]);

    assert.deepStrictEqual(result, [
        ["", 2, 3, 5],
        [2, 4, 6, 10],
        [3, 6, 9, 15],
        [5, 10, 15, 25]
    ]);
});

test("formats the multiplication table", () => {
    const table = generateMultiplicationTable([2, 3, 5]);
    const result = formatTable(table);

    assert.strictEqual(
        result,
        "\t2\t3\t5\n2\t4\t6\t10\n3\t6\t9\t15\n5\t10\t15\t25"
    );
});