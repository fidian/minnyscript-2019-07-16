/**
 * Problem 1
 *
 * @param input string: comma-separated list of item names
 * @returns {Array} of item names, sorted alphabetically
 */
const sortItemNames = input => {
    return [];
};

/**
 * Bonus Problem 1
 *
 * @param input string: comma-separated list of item names
 * @returns {Array} of item names, sorted alphabetically in reverse
 */
const reverseSortItemNames = input => {};

/*** Test cases ***/

describe('Problem 1: sortItemNames', () => {
    test('one item', () => {
        const result = sortItemNames('butterscotch pudding');
        expect(result).toEqual(['butterscotch pudding']);
    });
    test('two items', () => {
        const result = sortItemNames('apples, oranges');
        expect(result).toEqual(['apples', 'oranges']);
    });
    test('Big Mac™', () => {
        const result = sortItemNames(
            'two all-beef patties, special sauce, lettuce, cheese, pickles, onions, sesame bun'
        );
        expect(result.length).toBe(7);
        expect(result[0]).toBe('cheese');
        expect(result[1]).toBe('lettuce');
        expect(result[2]).toBe('onions');
        expect(result[3]).toBe('pickles');
        expect(result[4]).toBe('sesame bun');
        expect(result[5]).toBe('special sauce');
        expect(result[6]).toBe('two all-beef patties');
    });
    test('empty string', () => {
        const result = sortItemNames('');
        expect(result).toEqual([]);
    });
});
describe('Bonus Problem 1: reverseSortItemNames', () => {
    test.skip('one item', () => {
        const result = reverseSortItemNames('butterscotch pudding');
        expect(result).toEqual(['butterscotch pudding']);
    });
    test.skip('two items', () => {
        const result = reverseSortItemNames('apples, oranges');
        expect(result).toEqual(['oranges', 'apples']);
    });
    test.skip('Big Mac™', () => {
        const result = reverseSortItemNames(
            'two all-beef patties, special sauce, lettuce, cheese, pickles, onions, sesame bun'
        );
        expect(result.length).toBe(7);
        expect(result[0]).toBe('two all-beef patties');
        expect(result[1]).toBe('special sauce');
        expect(result[2]).toBe('sesame bun');
        expect(result[3]).toBe('pickles');
        expect(result[4]).toBe('onions');
        expect(result[5]).toBe('lettuce');
        expect(result[6]).toBe('cheese');
    });
    test.skip('empty string', () => {
        const result = reverseSortItemNames('');
        expect(result).toEqual([]);
    });
});
