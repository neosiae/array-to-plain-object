module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected array but got ${typeof arr}`)
  }

  return Object.assign({}, arr)
}
