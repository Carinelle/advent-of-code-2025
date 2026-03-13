import {getInput} from "../utils/file-input-helper";

export function sumJoltageTwoBatteries(input: string): number {
    const banks = input.trim().split(/\r?\n/);
    let totalOutputJoltage = 0;

    for (const bank of banks) {
        let firstMaxDigit = 0;
        let secondMaxDigit = 0;

        for (let currentBatteryPosition = 0; currentBatteryPosition < bank.length; currentBatteryPosition++) {
            let currentDigit = bank[currentBatteryPosition];
            let currentDigitFormatted = +currentDigit;

            if (currentDigitFormatted > firstMaxDigit && currentBatteryPosition < bank.length - 1) {
                firstMaxDigit = currentDigitFormatted;
                secondMaxDigit = 0;
            }

            for (let newSearchBatteryPosition = currentBatteryPosition + 1; newSearchBatteryPosition < bank.length; newSearchBatteryPosition++) {
                currentDigit = bank[newSearchBatteryPosition];
                currentDigitFormatted = +currentDigit;

                if (currentDigitFormatted > secondMaxDigit) {
                    secondMaxDigit = currentDigitFormatted;
                }
            }
        }

        let largestNumber = Number(`${firstMaxDigit}${secondMaxDigit}`);
        totalOutputJoltage += largestNumber;
    }

    return totalOutputJoltage;
}

export function solveDay03Part1(): number {
    const input = getInput(3);
    return sumJoltageTwoBatteries(input);
}
