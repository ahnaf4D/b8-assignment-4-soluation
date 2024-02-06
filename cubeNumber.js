function cubeNumber(n) {
    if (typeof n !== 'number') {
        return "Please Provide a Number";
    }
    else {
        const cube = Math.pow(n, 3);
        return `The cube of ${n} is ${cube}`;
    }
}
// check
const userGivenValue = cubeNumber('Hello world');
console.log(userGivenValue);