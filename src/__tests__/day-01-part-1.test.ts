import {describe, it, expect} from 'vitest';
import {countZeroOccurrences} from "../challenges/day-01-part-1";

describe('Day 01 Part 1 Logic', () => {
    it('should count zero occurrences with lower values from AoC example', () => {
        const input =
`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
        expect(countZeroOccurrences(input)).toBe(3);
    });

    it('should count zero occurrences with bigger values than from AoC example', () => {
        const input =
`R150
L300
L250`;
        expect(countZeroOccurrences(input)).toBe(2);
    });
});