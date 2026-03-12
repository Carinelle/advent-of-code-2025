import {getInput} from "../utils/file-input-helper";

export function countAllZeroOccurrences(input: string): number {
    const lines = input.trim().split('\n');
    let currentPosition = 50;
    let zeroOccurrences = 0;

    for (const line of lines) {
        const direction = line[0];
        const steps = parseInt(line.slice(1));
        const stepValue = (direction === 'R' ? 1 : -1);

        for (let i = 0; i < steps; i++) {
            currentPosition += stepValue;

            if (currentPosition === 100) {
                currentPosition = 0;
            } else if (currentPosition === -1) {
                currentPosition = 99;
            }

            if (currentPosition === 0) {
                zeroOccurrences++;
            }
        }
    }

    return zeroOccurrences;
}

export function solveDay01Part2(): number {
    const input = getInput(1);
    return countAllZeroOccurrences(input);
}