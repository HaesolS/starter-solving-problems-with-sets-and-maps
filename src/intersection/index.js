function intersection(a, b) {
    // initialize a new Map
    const elementMap = new Map();
    // initialize a new Set
    const commonSet = new Set();

    // Add elements from array 'a' to the map
    // for each element e of a, add e to the Map
    for (let e of a) {
        elementMap.set(e);
    }

    // Check if elements from array 'b' are in the map
    // for each element e of b, lookup e in the Map and if e is in the Map then add e to the Set
    for (let e of b) {
        if (elementMap.has(e)) {
            commonSet.add(e);
        }
    }

    // Convert the set to an array and return
    return Array.from(commonSet);
}

module.exports = intersection;
