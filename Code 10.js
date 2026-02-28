const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Loose equality check", actual: "100", expected: 100, type: "looseEqual" },
    { name: "Response time < 500", actual: 450, expected: 500, type: "lessThan" },
    { name: "Truth or false", actual: "abc123", expected: null, type: "truthy" },
    { name: "Type is number", actual: 123, expected: "number", type: "typeCheck" }
];