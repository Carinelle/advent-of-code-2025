import {describe, it, expect} from 'vitest';
import {countAllZeroOccurrences} from "../challenges";

describe('Day 01 Part 2 Logic', () => {
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
        expect(countAllZeroOccurrences(input)).toBe(6);
    });

    it('should count zero occurrences with bigger values than from AoC example', () => {
        const input =
`R150
L300
L250`;
        expect(countAllZeroOccurrences(input)).toBe(7);
    });
});