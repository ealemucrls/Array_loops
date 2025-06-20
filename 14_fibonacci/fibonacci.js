const fibonacci = function(c) {
    let sum;
    if (typeof c !== 'number') {
        sum = parseInt(c);
    } else {
        sum = c;
    }

    if (sum < 0){
        return "OOPS";
    }
    if (sum === 0){
         return 0;
    }
    let first = 1;
    let second = 0;

    for (let i = 2; i <= sum; i++) {
        let current = first + second;
        second = first;
        first = current;
    }

    return first;

};
// Do not edit below this line
module.exports = fibonacci;
