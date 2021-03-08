module.exports = function check(str, bracketsConfig) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arr1[i] = bracketsConfig[i][0];
        arr2[i] = bracketsConfig[i][1];
    }
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let index in arr1) {
            if (arr[i] == arr1[index]) {
                if (arr[i + 1] == arr2[index]) {
                    arr.splice(i, 2);
                    i = -1;
                    break;
                }
            }
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }
};
