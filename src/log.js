/**
 *  打印输出到页面上
 * */

window.log = (function (document) {
    const logDiv = document.createElement('div');
    document.body.prepend(logDiv)
    const textList = [];
    return function (...args) {
        const textString = args.map(function (v) {
            if (typeof v === 'object') return JSON.stringify(v);
            return v
        }).join('');
        textList.push('<p>' + textString + '</p>');
        logDiv.innerHTML = textList.join('');
    }
})(document);
