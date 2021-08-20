function reverseWords(str) {
    const arr = str.split(' ').reverse().join(' ');
    return arr;
}

// or

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}