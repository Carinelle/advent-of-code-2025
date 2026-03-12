import {getInput} from "../utils/file-input-helper";

export function sumInvalidIdsManyRepeats(input: string): number {
    const parts = input.trim().split(',');
    let sumInvalidIds = 0;
    let ranges: number[][] = [];

    for (const part of parts) {
        ranges.push(part.split('-').map(Number));
    }

    for (const range of ranges) {

        for (let currentNumber = range[0]; currentNumber <= range[1]; currentNumber++) {
            const formattedCurrentNumber = currentNumber.toString();
            let lengthOfCurrentNumber = formattedCurrentNumber.length;
            for (let segmentSize = 1; segmentSize <= lengthOfCurrentNumber / 2; segmentSize++) {
                const possibleElement = formattedCurrentNumber.slice(0, segmentSize);
                const repeatedElement = possibleElement.repeat(lengthOfCurrentNumber / segmentSize);
                if (repeatedElement === formattedCurrentNumber) {
                    sumInvalidIds += currentNumber;
                    break;
                }
            }
        }
    }

    return sumInvalidIds;
}

export function solveDay02Part2(): number {
    const input = getInput(2);
    return sumInvalidIdsManyRepeats(input);
}
