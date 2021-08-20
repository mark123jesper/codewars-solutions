function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    var root1;
    var nextroot;
    if (Math.sqrt(sq) % 1 === 0) {
        root1 = Math.sqrt(sq);
        nextroot = root1 + 1;
        return nextroot * nextroot;
    }

    else {
        return -1;
    }
}

//or

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}