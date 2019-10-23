function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * arguments.callee(num - 1)
    }
}
window.log(factorial(5))

function outer(){
    inner()
}
function inner(){
    window.log(arguments.callee.caller === outer)
}
outer()