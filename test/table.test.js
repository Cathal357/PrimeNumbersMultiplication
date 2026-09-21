const test = require("node:test");
const assert = require("node:assert");
const { generateMultiplicationTable } = require("../src/table");

test("generates a multiplication table for 2, 3 and 5", () => {
    const result = generateMultiplicationTable([2, 3, 5]);

    assert.deepStrictEqual(result, [
        ["", 2, 3, 5],
        [2, 4, 6, 10],
        [3, 6, 9, 15],
        [5, 10, 15, 25]
    ]);
});