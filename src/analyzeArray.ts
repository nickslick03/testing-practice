export const analyzeArray = (arr: number[]) => ({
    average: arr.reduce((previous, current) => previous + current) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
});