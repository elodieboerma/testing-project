import { capitalize, reverse } from './index.js';

test('check capitalization', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

test('reverse string', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
});