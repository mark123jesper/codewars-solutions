function iqTest(numbers) {
    let numArr = numbers.split(' ');
    let obj = {};
    obj.evenCount = 0;
    obj.oddCount = 0;
    console.log(numArr);

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            obj.evenCount += 1;
            obj.even = i + 1;
        } else {
            obj.oddCount += 1;
            obj.odd = i + 1;
        }
    }

    if (obj.evenCount < obj.oddCount) {
        return (obj.even);
    } else {
        return (obj.odd);
    }
}

// or

function iqTest(numbers) {
    numbers = numbers.split(" ").map(function (el) { return parseInt(el) });

    var odd = numbers.filter(function (el) { return el % 2 === 1 });
    var even = numbers.filter(function (el) { return el % 2 === 0 });

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}