function squareDigits(num) {
    //may the code be with you
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}

//or 

function squareDigits(num) {
    var array = num.toString().split('').map(function (int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}