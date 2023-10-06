import { getTransformTime } from './transform.util';

describe('getTransformTime', () => {
    test('should convert minutes to hours and minutes', () => {
        const input = 125;
        const expectedOutput = '2h 5min';

        const result = getTransformTime(input);

        expect(result).toBe(expectedOutput);
    });

    test('should show just minutes', () => {
        const input = 50;
        const expectedOutput = '50min';

        const result = getTransformTime(input);

        expect(result).toBe(expectedOutput);
    });

    test('should handle zero minutes', () => {
        const input = 0;
        const expectedOutput = '0min';

        const result = getTransformTime(input);

        expect(result).toBe(expectedOutput);
    });
});