module.exports = pull_gen

function pull_gen(gen) {
  return function read (abort, cb) {
    if (abort) return cb(abort)
    try {
      var { done, value } = gen.next()
    } catch (err) {
      console.log(err)
      return cb(err)
    }

    if (done) return cb(true)

    cb(null, value)
  }
}
