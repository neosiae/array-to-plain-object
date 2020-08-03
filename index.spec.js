const arrayToObject = require('./index')
const test = require('tape')

test('Converts an array into a plain object', t => {
  const arr = ['New York', 'Berlin', 'Sarajevo']

  const obj = arrayToObject(arr)

  t.deepEqual(obj, { 0: 'New York', 1: 'Berlin', 2: 'Sarajevo' })

  t.end()
})

test('Throws an error when the argument is not an array', t => {
  const notArray = 'not an array'

  t.throws(() => {
    // eslint-disable-next-line
    const obj = arrayToObject(notArray)
  })

  t.end()
})
