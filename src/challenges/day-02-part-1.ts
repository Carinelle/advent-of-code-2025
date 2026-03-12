import {getInput} from "../utils/file-input-helper";

export function sumInvalidIdsTwoRepeats(input: string): number {
    const parts = input.trim().split(',');
    let sumInvalidIds = 0;
    let ranges: number[][] = [];

    for (const part of parts) {
        ranges.push(part.split('-').map(Number));
    }

    for (const range of ranges) {

        for (let currentNumber = range[0]; currentNumber <= range[1]; currentNumber++) {
            const formattedCurrentNumber = currentNumber.toString();
            const lengthOfCurrentNumber = formattedCurrentNumber.length;
            if (lengthOfCurrentNumber % 2 === 0) {
                const formattedCurrentNumberPartFirst = formattedCurrentNumber.slice(0, lengthOfCurrentNumber / 2);
                const formattedCurrentNumberPartSecond = formattedCurrentNumber.slice(lengthOfCurrentNumber / 2, lengthOfCurrentNumber);
                if (formattedCurrentNumberPartFirst === formattedCurrentNumberPartSecond) {
                    sumInvalidIds += currentNumber;
                }
            }
        }
    }

    return sumInvalidIds;
}

export function solveDay02Part1(): number {
    const input = getInput(2);
    return sumInvalidIdsTwoRepeats(input);
}
