import { reverseString } from "./reverseString";

test('reverse Nicholas', () => {
    expect(reverseString('Nicholas')).toBe('salohciN');
});

test('reverse ""', () => {
    expect(reverseString('')).toBe('');
})

test('reverse Nic', () => {
    expect(reverseString('Nic')).toBe('ciN');
})