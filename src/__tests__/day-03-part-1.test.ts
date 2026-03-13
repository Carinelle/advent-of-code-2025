import {describe, it, expect} from 'vitest';
import {sumJoltageTwoBatteries} from "../challenges/day-03-part-1";

describe('Day 03 Part 1 Logic', () => {
    it('should add up the maximum joltage with two batteries from each bank from the AoC example', () => {
        const input = `987654321111111
        811111111111119
        234234234234278
        818181911112111`;
        expect(sumJoltageTwoBatteries(input)).toBe(357);
    });
});

