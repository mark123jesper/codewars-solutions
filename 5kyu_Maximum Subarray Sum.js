const maxSequence = (a, sum = 0) => a.reduce((max, v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

// or

var maxSequence = function (arr) {
    var i, j, k = 0, r;
    for (i = 0; i < arr.length; ++i) {
        for (r = 0, j = i; j < arr.length; ++j) {
            r += arr[j];
            k = Math.max(k, r);
        }
    }
    return k;
}