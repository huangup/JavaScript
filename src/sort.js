
/**
 * 快排
 * */
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var _arr = arr.slice(); // 浅复制
    var pivotIndex = Math.ceil(_arr.length / 2);// 找到一个基准
    var pivot = _arr.splice(pivotIndex - 1, 1)[0];

    //定义左右数组
    var left = [], right = [];

    //比基准小的放左边，大的放右边
    for (var i = 0, len = _arr.length; i < len; i++) {
        if (_arr[i] <= pivot) {
            left.push(_arr[i])
        } else {
            right.push(_arr[i])
        }
    }

    //递归
    return quickSort(left).concat([pivot], quickSort(right))
}

var arr = [5, 9, 3, 7, 2, 1, 5];
var result = quickSort(arr);

window.log(result);