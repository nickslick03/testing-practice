export const calculator = {
    add: (...nums: number[]): number => nums.reduce((previous, current) => previous + current),
    subtract: (...nums: number[]): number => nums.reduce((previous, current) => previous - current),
    multiply: (...nums: number[]): number => nums.reduce((previous, current) => previous * current),
    divide: (...nums: number[]): number => nums.reduce((previous, current) => previous / current),
}