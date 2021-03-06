const sum = require('../components/sum');

test('add 5 + 6 to equal 11', () => {
    expect(sum(5,6)).toBe(11);
});