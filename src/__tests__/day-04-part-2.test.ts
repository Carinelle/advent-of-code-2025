import {describe, it, expect} from 'vitest';
import {countRollsAccessibleWithRemoving} from "../challenges";


describe('Day 04 Part 2 Logic', () => {
    it('should count paper rolls that have fewer than four rolls in adjacent positions with removing them from the AoC example', () => {
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
        expect(countRollsAccessibleWithRemoving(input)).toBe(43);
    });
});

