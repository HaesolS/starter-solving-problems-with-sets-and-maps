/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array of words
 */
function sameLetters(words) {
    // instantiate new Map named results
    const results = new Map();

    // for each word in 'words' array...
    for (let word of words) {
        // Convert the word to lowercase
        const lowerWord = word.toLowerCase();
        // Find all unique letters in the word
        // create an array from Set with all the letters of the word to remove duplicates
        let uniqueLetters = [...new Set(lowerWord)]
        // sort the Set alphabetically
        .sort()
        // and use join to create a string from the array
        .join("");

        // Update the 'results' Map
        // if the sorted string of letters is a key in the results Map...
        if (results.has(uniqueLetters)) {
            // add word to the array associated with that key
            results.get(uniqueLetters).push(word);
        } else {
            // make a new entry in the 'results' Map key
            // and value an array with word as its only element
            results.set(uniqueLetters, [word]);
        }
    }
    // return 'results' Map
    return results;
}

module.exports = sameLetters;
