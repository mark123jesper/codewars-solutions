function solution(nums) {
    if (nums !== null) {
        var sorted = nums.sort(function (a, b) { return a - b });
        return sorted;
    } else {
        return [];
    }
}

//or

function solution(nums) {
    return (nums || []).sort(function (a, b) {
        return a - b
    });
}