/**
 * 可以将数字转换成中文大写的表示，处理到千万级别，
 * 例如 toChineseNum(12345678)，返回 一千二百三十四万五千六百七十八
 * */

const toChineseNum = (num) => {
    const number = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; // 定义中文数字
    const unit = ['', '十', '百', '千', '万']; // 定义中文基
    const resultStr = [];
    let len = 0; // 数字长
    let lastNumNotZero = false;
    while (num) {
        let n = num % 10;
        let u = len >= unit.length ? len % 5 + 1 : len % 5;

        // 添加基
        if (n || ( u === unit.length - 1 && len === unit.length - 1)) { // 当前位存在 或者 u 和 长度均为 最后一位unit
            resultStr.unshift(unit[u])
        }

        // 处理数
        if (n || lastNumNotZero && u !== unit.length - 1) { // 当前位和前一位不都为零且当前位不为最后一位基
            resultStr.unshift(number[n])
        }

        lastNumNotZero = !!n;
        len++;
        num = Math.floor(num / 10)
    }
    return resultStr.join('')
};

log(toChineseNum(39010908));