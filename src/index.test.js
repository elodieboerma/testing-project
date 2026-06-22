import { capitalize, reverse, calculator } from './index.js';

test('check capitalization', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

test('reverse string', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
});

test('calculator', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(6, 2)).toBe(3);
});

