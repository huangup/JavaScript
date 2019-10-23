/**
 *  js数组、普通对象的深拷贝实现
 * */

/**
 *  用JSON.stringify和JSON.parse
 * */
var deepClone1 = function (any) {
    return JSON.parse(JSON.stringify(any))
}

/**
 *  递归
 * */
var arrayDeepClone = function (arr) {
    var ans = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i].constructor === Array) {
            if (arr[i].length) {
                ans[i] = arrayDeepClone(arr[i]);
            }else{
                ans[i] = [];
            }
        } else if (arr[i].constructor === Object) {

        } else {
            ans[i] = arr[i];
        }
    }
    return (ans);
}

var a = [1, 2, 'xxxxx', [4, 5, 6], [7, 8, 9]], b = arrayDeepClone(a);

console.log(a === b);            //false
console.log(a[3]);               //[4,5,6]
console.log(a[3] === b[3]);      //false
console.log(a[4] === b[4]);      //false