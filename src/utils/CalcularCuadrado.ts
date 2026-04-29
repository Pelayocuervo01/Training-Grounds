export function CalcularCuadrado(arr: (number | null)[]): boolean{
    if (arr.some(lado => lado === null)) return false;

    const nums = arr as number[];

    if (nums.length !== 4) return false;

    if (nums.some(lado => lado === 0)) return false;

    return nums.every(lado => lado === nums[0])
}