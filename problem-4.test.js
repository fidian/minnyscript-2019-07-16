/**
 * Problem 4
 *
 * @param input comma-separated string containing optional quantity & item name
 * @returns {number} of total items, including quantities
 */
const countTotalItems = input => {
    return 0;
};

/**
 * Bonus Problem 4
 *
 * @param input comma-separated string containing optional quantity & item name
 * @returns {boolean} true if number of total items is ten or less
 */
const canUseTheExpressLane = input => {};

/*** Test cases ***/

describe('Problem 4: countTotalItems', () => {
    test('a dozen eggs', () => {
        const input = '12 eggs';
        const result = countTotalItems(input);
        expect(result).toBe(12);
    });
    test('they came in a ten-pack', () => {
        const input = '10 diapers';
        const result = countTotalItems(input);
        expect(result).toBe(10);
    });
    test('a healthy breakfast', () => {
        const input = '2 apples,2 bananas,1 milk,1 yogurt';
        const result = countTotalItems(input);
        expect(result).toBe(6);
    });
    test('one fruit apiece', () => {
        const input = 'apples,bananas,cherries,kiwis,limes';
        const result = countTotalItems(input);
        expect(result).toBe(5);
    });
    test('Scarborough Fair?', () => {
        const input = 'parsley,sage,rosemary,2 tomato paste';
        const result = countTotalItems(input);
        expect(result).toBe(5);
    });
    test('if you make pie, can I gave some?', () => {
        const input = 'cherries,4 kiwis,2 limes,12 eggs,nutmeg';
        const result = countTotalItems(input);
        expect(result).toBe(20);
    });
    test('eeew, nevermind', () => {
        const input = '2 bananas,garlic,milk,4 tomato paste';
        const result = countTotalItems(input);
        expect(result).toBe(8);
    });
    test('what are you feeding that poor child?', () => {
        const input =
            '2000 diapers,60 eggs,garlic,20 kiwis,hummus,vanilla extract,zucchini';
        const result = countTotalItems(input);
        expect(result).toBe(2084);
    });
});

describe('Bonus Problem 4: canUseTheExpressLane', () => {
    test.skip('a dozen eggs', () => {
        const input = '12 eggs';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(false);
    });
    test.skip('they came in a ten-pack', () => {
        const input = '10 diapers';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(true);
    });
    test.skip('a healthy breakfast', () => {
        const input = '2 apples,2 bananas,1 milk,1 yogurt';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(true);
    });
    test.skip('one fruit apiece', () => {
        const input = 'apples,bananas,cherries,kiwis,limes';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(true);
    });
    test.skip('Scarborough Fair?', () => {
        const input = 'parsley,sage,rosemary,2 tomato paste';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(true);
    });
    test.skip('if you make pie, can I gave some?', () => {
        const input = 'cherries,4 kiwis,2 limes,12 eggs,nutmeg';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(false);
    });
    test.skip('eeew, nevermind', () => {
        const input = '2 bananas,garlic,milk,4 tomato paste';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(true);
    });
    test.skip('what are you feeding that poor child?', () => {
        const input =
            '2000 diapers,60 eggs,garlic,20 kiwis,hummus,vanilla extract,zucchini';
        const result = canUseTheExpressLane(input);
        expect(result).toBe(false);
    });
});
