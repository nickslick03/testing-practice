import { capitalize } from "./capitalize";

test('capitalize nick', () => {
    expect(capitalize('nick')).toBe('Nick');
});

test('capitalize d', () => {
    expect(capitalize('d')).toBe('D');
});