/**
 * @param {number} x
 * @return {number}
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−Math.pow(2, 31), Math.pow(2, 31) − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
const reverse = function(x) {
  const isOverflow = x => !(x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) - 1)

  let _result = isOverflow(x) ? 0 : parseInt(String(Math.abs(x)).split('').reverse().join(''))
  _result = isOverflow(_result) ? 0 : _result
  return x < 0
    ? `-${_result}`
    : _result
}

console.log(reverse(1534236469))
