export function sumArray (arr) {
    return arr.reduce((acc, val) => {
        return acc + parseInt(val || 0, 10);
    }, 0);
}

export function randNum (max) {
    return Math.round(Math.random() * max);
}

export function randArr(arr) {
    return arr[randNum(arr.length - 1)];
}

export function extend (dst) {
    dst = dst || {};

    for (let i = 1, iLength = arguments.length; i < iLength; i++) {
        if (!arguments[i]) {
            continue;
        }

        let obj = arguments[i];
        let keys = Object.keys(obj);

        for (let j = 0, jLength = keys.length; j < jLength; j++) {
            let key = keys[j];
            let typeOfValue = Object.prototype.toString.call(obj[key]);

            if (typeOfValue === '[object Object]' || typeOfValue === '[object Array]') {
                dst[key] = dst[key] || (obj[key] instanceof Array ? [] : {});
                dst[key] = extend(dst[key], obj[key]);
            } else {
                dst[key] = obj[key];
            }
        }
    }

    return dst;
}
