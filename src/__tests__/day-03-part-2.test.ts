import {describe, it, expect} from 'vitest';
import {sumJoltageTwelveBatteries} from "../challenges";


describe('Day 03 Part 2 Logic', () => {
    it('should add up the maximum joltage with twelve batteries from each bank from the AoC example', () => {
        const input = `987654321111111
        811111111111119
        234234234234278
        818181911112111`;
        expect(sumJoltageTwelveBatteries(input)).toBe(3121910778619);
    });
});

