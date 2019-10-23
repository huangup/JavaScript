var values = [1, 2, 3, 12, 32, 11, 15, 27, 8, 19]
window.log('无参数的array.sort:',values.sort())
window.log('array.sort(callback):',values.sort(function (val, val2) {
    if (val < val2) {
        return -1
    } else if (val > val2) {
        return 1
    } else {
        return 0
    }
}))
window.log('array.sort(callback):', values.sort(function (v1, v2) {
    return v1 - v2
}))

var data = [{name: 'hnh', age: 25}, {name: 'johnny', age: 24}, {name: 'huang', age: 26}, {name: 'author', age: 18}]
function createCompare(propertyName){
    return function(obj1,obj2){
        var val=obj1[propertyName]
        var val2=obj2[propertyName]
        if (val < val2) {
            return -1
        } else if (val > val2) {
            return 1
        } else {
            return 0
        }
    }
}
window.log(data.sort(createCompare('name')))
window.log(data.sort(createCompare('age')))

function bubbleSort (array=[]) { // 冒泡排序
    if(!Array.isArray(array)) return
    if(!array.length) return
    const arr = [...values]
    const len = arr.length - 1
    function swap (i,j) {
        const val = arr[i]
        arr[i] = arr[j]
        arr[j] = val
    }
    for (let i=0;i < len;i++) {
        for (let j=1;j < len - i;j++) {
            if (arr[j - 1] > arr[j ]) {
                swap(j - 1,j)
            }
        }
    }
    return arr
}
window.log('冒泡排序:', bubbleSort(values))
