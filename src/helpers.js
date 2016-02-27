export function sumArray (arr) {
    return arr.reduce((acc, val) => {
        return acc + parseInt(val || 0, 10);
    }, 0);
}


