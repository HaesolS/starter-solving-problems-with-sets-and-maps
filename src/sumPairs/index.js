/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    // initialize a new Map named numbers
    const numbers = new Map();
    // initialize a new Map named solution
    const solution = new Map();

    // Add elements from array 'A' to the map
    // for each element e in A, add e to 'numbers'
    for (let e of A) {
        numbers.set(e);
    }

    // Check if pairs exist
    // for each element e in A...
    for (let e of A) {
        // calculate diff = N - e
        const diff = N - e;
        // if diff is not equal to e...
        if (diff !== e) {
            // if diff is in numbers...
            if (numbers.has(diff)) {
            // add [e, diff] to solution
            // Math.min ensures the smaller value comes 1st and Math.max ensures the larger value comes 2nd
            solution.set(Math.min(e, diff), Math.max(e, diff));
            }
        }
    }

    // Convert the solution Set to an array and return it
    return Array.from(solution);
}

module.exports = sumPairs;
