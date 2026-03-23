import {getInput} from "../utils/file-input-helper";

export function sumJoltageTwelveBatteries(input: string): number {
    const banks = input.trim().split(/\r?\n/);
    let totalOutputJoltage = 0;

    for (const bank of banks) {
        let largestNumber: number[] = new Array(12).fill(0);
        let maxPosition = -1;

        for (let i = 0; i < largestNumber.length; i++) {
            for (let currentBatteryPosition = 0; currentBatteryPosition < bank.length; currentBatteryPosition++) {
                let currentDigit = bank[currentBatteryPosition];
                let currentDigitFormatted = +currentDigit;

                if (currentBatteryPosition > maxPosition && currentBatteryPosition < bank.length - 11 + i) {
                    if (currentDigitFormatted > largestNumber[i]) {
                        largestNumber[i] = currentDigitFormatted;
                        maxPosition = currentBatteryPosition;
                    }
                }
            }
        }

        const largestNumberFormatted = Number(largestNumber.join(""));
        totalOutputJoltage += largestNumberFormatted;
    }

    return totalOutputJoltage;
}

export function solveDay03Part2(): number {
    const input = getInput(3);
    return sumJoltageTwelveBatteries(input);
}