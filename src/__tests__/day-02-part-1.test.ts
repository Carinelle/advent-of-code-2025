import {describe, it, expect} from 'vitest';
import {sumInvalidIdsTwoRepeats} from "../challenges";

describe('Day 02 Part 1 Logic', () => {
    it('should sum up all the invalid IDs from the AoC example', () => {
        const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862`;
        expect(sumInvalidIdsTwoRepeats(input)).toBe(1227775554);
    });
});