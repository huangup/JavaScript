var s1 = new String('0123456789')
var s2 = s1.substring(2)
s1 = null
window.log(s1)
window.log(s2)
window.log('---------------------------------------------------------------------')

var s3 = new String('hhhhh')
s3.name='这是个基本包装类型的字符串'
window.log(s3)
window.log(s3.name)
window.log(typeof s3)
window.log('使用new创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中；自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁')
window.log('---------------------------------------------------------------------')

var s4='hahahaha'
s4.name='这是个基本类型值得字符串'
window.log(s4)
window.log(typeof s4)
window.log(s4.name)
window.log('---------------------------------------------------------------------')

var boolObj = new Boolean(false)
var boolValue = false
window.log(boolObj)
window.log(boolObj && true)
window.log(boolValue && true)
window.log('boolObj instanceof Boolean === ' + (boolObj instanceof Boolean).toString())
window.log('boolValue instanceof Boolean === ' + (boolValue instanceof Boolean).toString())
window.log('-------------------------绝对不要new Boolean()-----------------------')