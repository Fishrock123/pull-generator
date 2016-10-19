const assert = require('assert')

module.exports = {
  testRead
}

function testRead(expected, message) {
  return function (read) {
    read(null, function next (err, data) {
      if (err === true) return
      if (err) throw err

      assert.strictEqual(data, expected.shift(), message)

      read(null, next)
    })
  }
}
