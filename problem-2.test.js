/**
 * Problem 2
 *
 * @param input string: comma-separated list of item names
 * @returns {number} of items
 */
const countItemNames = input => {
    return 0;
};

/**
 * Bonus Problem 2
 *
 * @param input string: comma-separated list of item names
 * @returns {number} of unique items
 */
const countUniqueItemNames = input => {};

/*** Test cases ***/

describe('Problem 2: countItemNames', () => {
    test('one item', () => {
        const result = countItemNames('butterscotch pudding');
        expect(result).toBe(1);
    });
    test('two items', () => {
        const result = countItemNames('apples, oranges');
        expect(result).toBe(2);
    });
    test('Big Mac™', () => {
        const result = countItemNames(
            'two all-beef patties, special sauce, lettuce, cheese, pickles, onions, sesame seed bun'
        );
        expect(result).toBe(7);
    });
    test('empty string', () => {
        const result = countItemNames('');
        expect(result).toBe(0);
    });
});
describe('Bonus Problem 2: countUniqueItemNames', () => {
    test.skip('one item', () => {
        const result = countUniqueItemNames('butterscotch pudding');
        expect(result).toBe(1);
    });
    test.skip('two items', () => {
        const result = countUniqueItemNames(
            'apples, apples, apples, apples, oranges'
        );
        expect(result).toBe(2);
    });
    test.skip('Big Mac™', () => {
        const result = countUniqueItemNames(
            'sesame seed bun, all-beef patty, special sauce, lettuce, cheese, all-beef patty, pickles, onions, sesame seed bun'
        );
        expect(result).toBe(7);
    });
    test.skip('empty string', () => {
        const result = countUniqueItemNames('');
        expect(result).toBe(0);
    });
});
