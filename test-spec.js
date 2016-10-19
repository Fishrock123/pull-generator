const tape = require('tape')
const spec = require('pull-stream-spec')
const pull = require('pull-stream')
const { testRead } = require('./test-helpers')
const pull_gen = require('./')

function* OneTwoThree() {
  yield 1
  yield 2
  yield 3
}

spec.source(tape, () => pull_gen(OneTwoThree()))

pull(pull_gen(OneTwoThree()), testRead([1, 2, 3]))
