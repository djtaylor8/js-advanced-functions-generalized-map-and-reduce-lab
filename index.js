function map(arr, mapFunc) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i], i, arr);
        newArray.push(result);
    }
    return newArray;
}

function reduce(arr, reducer, initialValue) {
    let total;
    if (initialValue) {
        total = initialValue;
        for (let i = 0; i < arr.length; i++) {
            total = reducer(arr[i], total);
        }
        return total;
    } else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = reducer(arr[i], total);
        }
        return total;
    }
}