function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' && typeof string2 !== 'string') {
        return "Please provide a string";
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
const result = matchFinder('JavaScript', 'code');
console.log(result);