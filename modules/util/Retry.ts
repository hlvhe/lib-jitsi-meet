/**
 * Gets next timeout using the full jitter pattern.
 *
 * NOTE that there are no checks for argument correctness, so either do the math or use defaults.
 *
 * @param {number} retry - The retry number.
 * @param {number} minDelay - The minimal delay in milliseconds.
 * @param {number} base - The exponent base.
 * @returns {number} - The amount of waiting before trying another time given in milliseconds.
 * @private
 */
export function getJitterDelay(retry: number, minDelay: number = 500, base: number = 2): number {
    return Math.floor((Math.random() * ((Math.pow(base, retry) * 1000) - minDelay)) + minDelay);
}
