function canPay(arrays, perPrice) {
    let sum = 0;
    for (const element of arrays) {
        sum += element;
    }
    if (arrays.length == 0) {
        return "Invalid Input"
    }
    else {
        if (sum >= perPrice) {
            return true
        }
        else {
            return false;
        }
    }
}

const result = canPay([2, 6, 7, 7, 7], 20);
console.log(result);