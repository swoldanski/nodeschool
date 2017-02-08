// TO ERR IS HUMAN
// 
// const modulepath = process.argv[2]
// const feedCat = require(modulepath)
// const test = require('tape')
// 
// test('feedCat yum everything but chocolate', (t) => {
//     t.plan(2)
//     t.equal(feedCat('cheese'), 'yum', 'it is ok for me')
//     t.throws(feedCat.bind(null, 'chocolate'), 'never chocolate')
// })


// CALL
// 
// const modulepath = process.argv[2]
// const cb = require(modulepath)
// const test = require('tape')
// 
// test('callback testing', (t) => {
//     const iter = 5
//     t.plan(iter)
//     cb(iter, () => {
//         t.pass('callback called')
//     })
//     t.end()
// })



// TAPE
// 
// const modulepath = process.argv[2]
// const fancify = require(modulepath)
// const test = require('tape')
// 
// test('fancify returns the str wrapped in ~*~', (t) => {
//     t.equal(fancify('Hello'), '~*~Hello~*~', 'msg1')
//     t.equal(fancify('Hello', true), '~*~HELLO~*~', 'msg2')
//     t.equal(fancify('Hello', false, '!'), '~!~Hello~!~')
//     t.end()
// })


// TELL ME
// 
// const modulepath = process.argv[2]
// const isCoolNumber = require(modulepath)
// const assert = require('assert')
// assert.ok(isCoolNumber(42), '42 should be true')

// LOG IT OUT
// 
// const modulepath = process.argv[2]
// const input = process.argv[3]
// const emotify = require(modulepath)
// console.log(emotify(input))