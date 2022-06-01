import { calculator } from "./calculator";

test('adding', () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
})

test('subtracting', () => {
    expect(calculator.subtract(1, 2, 3)).toBe(-4);
})

test('multiplying', () => {
    expect(calculator.multiply(5, 2, 3)).toBe(30);
})

test('dividing', () => {
    expect(calculator.divide(5, 2, 3)).toBe(5/6);
})