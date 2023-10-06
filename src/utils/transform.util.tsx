export const getTransformTime = (minutesTime: number): string => {
    if (minutesTime > 60) {
        const hours = Math.floor(minutesTime / 60);
        const minutes = minutesTime % 60;

        return hours + 'h ' + minutes + 'min';
    } else {
        return minutesTime + 'min';
    }
};