function findAddress(obj) {
    // access the elements of the object
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    // formation the string as give sample - '10,15A,Earth Perfect'
    const str = `${street},${house},${society}`;
    // Return the result
    return str;
}

console.log(1, findAddress({ street: 10, house: '15A', society: 'Earth Perfect' }));
console.log(2, findAddress({ house: '15A', society: 'Earth Perfect' }));
