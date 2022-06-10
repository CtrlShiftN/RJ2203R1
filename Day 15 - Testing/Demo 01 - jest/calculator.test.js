const sum = require('./calculator');

test('Sum test', () => {
    expect(sum(2, 6)).toBe(9);
})