import {getInput} from "../utils/file-input-helper";

export function countRollsAccessible(input: string): number {
    const rolls = input.trim().split(/\r?\n/);
    let totalRollsAccessible = 0;
    let grid: string[][] = [];

    for (const roll of rolls) {
        grid.push(roll.split(''));
    }
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '@') {
                let adjacentRolls = 0;

                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue;

                        const neighborRow = r + dr;
                        const neighborCol = c + dc;

                        if (neighborRow >= 0 && neighborRow < grid.length &&
                            neighborCol >= 0 && neighborCol < grid[0].length) {

                            if (grid[neighborRow][neighborCol] === '@') {
                                adjacentRolls++;
                            }
                        }
                    }
                }

                if (adjacentRolls < 4) {
                    totalRollsAccessible++;
                }
            }
        }
    }

    return totalRollsAccessible;
}

export function solveDay04Part1(): number {
    const input = getInput(4);
    return countRollsAccessible(input);
}