import { describe, expect, test } from 'vitest';

export function sum(a, b) {
	return a + b;
}

describe('sum()', () => {
	test('adding 1 + 2 should equal 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});
});
