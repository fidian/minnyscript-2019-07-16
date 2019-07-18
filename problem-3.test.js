/**
 * Prices of items. You'll need these for the challenges.
 */
const UNIT_PRICES_BY_ITEM = {
    apples: 2.13,
    bananas: 1.46,
    cherries: 3.99,
    diapers: 0.18,
    eggs: 0.25,
    'fabric softener': 10.9,
    garlic: 0.79,
    hummus: 4.99,
    'ice cream': 3.49,
    jerky: 3.24,
    kiwis: 2.16,
    limes: 3.68,
    milk: 2.32,
    nutmeg: 5.73,
    oregano: 4.32,
    parsley: 3.37,
    quinoa: 0.62,
    rosemary: 2.89,
    sage: 2.41,
    'tomato paste': 1.47,
    umbrella: 9.99,
    'vanilla extract': 9.89,
    walnuts: 7.49,
    xylitol: 12.46,
    yogurt: 1.79,
    zucchini: 3.78
};

/**
 * Problem 3
 *
 * @param quantity number of units
 * @param itemName item identifier
 * @returns {number} price, or falsy if item is unknown
 */
const priceCheck = (quantity, itemName) => {
    return 0.0;
};

/**
 * Bonus Problem 3
 *
 * @param itemNames comma-separated list of item names (optional)
 * @returns {number} of highest-priced item from the list, or of
 * all the available items (if itemNames is undefined)
 */
const maxPricedItem = itemNames => {};

/*** Test cases ***/

describe('Problem 3: priceCheck', () => {
    test('in the coconut', () => {
        const result = priceCheck(1, 'limes');
        expect(result).toBe(3.68);
    });
    test('a spare is in the car', () => {
        const result = priceCheck(2, 'umbrella');
        expect(result).toBe(19.98);
    });
    test('minimum to stock in any freezer', () => {
        const result = priceCheck(3, 'ice cream');
        expect(result).toBe(10.47);
    });
    test('anti-vampire recipe', () => {
        const result = priceCheck(6, 'garlic');
        expect(result).toBe(4.74);
    });
    test("baker's dozen", () => {
        const result = priceCheck(13, 'eggs');
        expect(result).toBe(3.25);
    });
    test('per baby, look it up!', () => {
        const result = priceCheck(5250, 'diapers');
        expect(result).toBe(945.0);
    });
    test('that poor cow', () => {
        const result = priceCheck(6400, 'milk');
        expect(result).toBe(14848.0);
    });
    test('speling is for sukerz', () => {
        expect(priceCheck(4, 'dipers')).toBeFalsy();
        expect(priceCheck(4, 'dypers')).toBeFalsy();
        expect(priceCheck(8, 'hummis')).toBeFalsy();
        expect(priceCheck(16, 'parsly')).toBeFalsy();
        expect(priceCheck(17, 'keenwah')).toBeFalsy();
        expect(priceCheck(20, 'tomatoe paste')).toBeFalsy();
        expect(priceCheck(21, 'umbrela')).toBeFalsy();
        expect(priceCheck(24, 'zylital')).toBeFalsy();
        expect(priceCheck(26, 'zuchini')).toBeFalsy();
        expect(priceCheck(26, 'zuckini')).toBeFalsy();
    });
});

describe('Bonus Problem 3: maxPricedItem', () => {
    test.skip('one item', () => {
        const result = maxPricedItem('eggs');
        expect(result).toBe(0.25);
    });
    test.skip('a healthy breakfast', () => {
        const result = maxPricedItem('apples, bananas, milk, yogurt');
        expect(result).toBe(2.32);
    });
    test.skip('with unavailable item', () => {
        const result = maxPricedItem('apples, oranges');
        expect(result).toBe(2.13);
    });
    test.skip('no items specified', () => {
        const result = maxPricedItem('');
        expect(result).toBe(12.46);
    });
});
