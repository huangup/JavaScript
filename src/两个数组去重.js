// const diff = function (arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         let index = arr2.indexOf(arr1[i]);
//         if (index !== -1) {
//             arr1.splice(i, 1);
//             arr2.splice(index, 1);
//             i = -1;
//         }
//     }
//     return arr1.concat(arr2);
// };


// todo: 这个算法不完善
// 支持数组本身有元素重复，减少时间复杂度
const arr1 = ["i", "b", "c", "d", "e", "f", "x"];
const arr2 = ["a", "b", "c", "d", "e", "e", "f", "g"];
const diff = function (arr1, arr2) {
    const temp = []; // 临时数组1
    const tempArray = []; // 临时数组2
    for (let i = 0; i < arr2.length; i++) {
        temp[arr2[i]] = true; // 巧妙地方：把数组B的值当成临时数组1的键并赋值为真
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!temp[arr1[i]]) {
            tempArray.push(arr1[i]);
            tempArray.push(arr2[i]);
        }
    }
    return tempArray
};

window.log(diff(arr1, arr2));