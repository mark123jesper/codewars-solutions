function accum(s) {
    var splits = s.toLowerCase().split('');
    var arr = [];
    for (let i = 0; i < splits.length; i++) {
        arr.push(splits[i].repeat(i + 1));
    }
    arr = arr.map(str => str.replace(/\b\w/g, splits => splits.toUpperCase())).join('-');
    return arr;
}