import path from "node:path";
import * as fs from "node:fs";

export function getInput(dayNumber: number): string {
    const formattedDay = dayNumber.toString().padStart(2, '0');

    const fileName = `day-${formattedDay}-input.txt`;
    const filePath = path.join(__dirname, '../inputs', fileName);

    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        throw new Error(`File ${fileName} not found.`);
    }
}