import {describe, it, expect} from 'vitest';
import {countRollsAccessible} from "../challenges";


describe('Day 04 Part 1 Logic', () => {
    it('should count paper rolls that have fewer than four rolls in adjacent positions from the AoC example', () => {
        const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;
        expect(countRollsAccessible(input)).toBe(13);
    });
});

