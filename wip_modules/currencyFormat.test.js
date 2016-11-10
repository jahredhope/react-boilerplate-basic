/* global: test */
import currencyFormat from './currencyFormat'

test('formats 1 to $1.00', () => {
  const sum = currencyFormat;
  expect(sum(1)).toBe('$1.00');
});
