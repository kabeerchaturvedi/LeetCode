## Concatenation of Array

let getConcatenation = function (nums) {
    nums.forEach(x => nums.push(x));
    return nums;
};
