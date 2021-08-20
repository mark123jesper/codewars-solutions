function duplicateCount(text) {
    //...
    return text
        .toLowerCase()
        .split('')
        .filter((val, i, arr) => {
            return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
        }).length;
}

// or

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}