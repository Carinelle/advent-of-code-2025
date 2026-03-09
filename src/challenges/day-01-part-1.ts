import {getInput} from "../utils/file-input-helper";

export function countZeroOccurrencesOnEnd(input: string): number {
    const lines = input.trim().split('\n');
    const range = 100;
    let currentPosition = 50;
    let zeroOccurrences = 0;

    for (const line of lines) {
        const direction = line[0];
        const steps = parseInt(line.slice(1));
        const movement = (direction === 'R' ? steps : -steps);
        currentPosition = ((currentPosition + movement) % range + range) % range;

        if (currentPosition === 0) {
            zeroOccurrences++;
        }
    }
    return zeroOccurrences;
}

export function solveDay01Part1(): number {
    const input = getInput(1);
    return countZeroOccurrencesOnEnd(input);
}
