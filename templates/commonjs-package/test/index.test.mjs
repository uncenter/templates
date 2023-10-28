import { describe, expect, test } from 'vitest';

function sum(a, b) {
	return a + b;
}

describe('sum()', () => {
	test('adding 1 + 2 should equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
