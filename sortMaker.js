function sortMaker(arrays) {
    if (arrays.length !== 2) {
        return `Invalid input`
    }
    else if (arrays[0] < 1 || arrays[1] < 0) {
        return `Invalid input`
    }
    else if (arrays[0] === arrays[1]) {
        return `equal`
    }
    else {
        return arrays.sort((a, b) => b - a);
    }
}

const numbers = [0,1];
console.log(sortMaker(numbers));