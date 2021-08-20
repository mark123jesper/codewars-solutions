function isPrime(n) {
    if (n <= 1)
        return false;
    if (n <= 3 || n == 5 || n == 7 || n == 11)
        return true;
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    return true;
}

// or 

const isPrime = num => {
    for (let i = 2; i <= num ** .5; i++) {
        if (!(num % i)) return false;
    }
    return num > 1;
}

//or 

function isPrime(num) {
    let result = true;

    if (num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    }

    if (num % 2 === 1) {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }
    return result;
}