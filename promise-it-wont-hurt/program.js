'use strict'
// DO SOME WORK
// 
const qhttp = require('q-io/http')
const uriSession = 'http://localhost:7000'
const uriDB = 'http://localhost:7001'
qhttp.read(uriSession)
.then((id) => {
    return qhttp.read(uriDB+'/'+id.toString())
    .then(JSON.parse)
    .then(console.log)
})
.then(null, console.error)
.done()


// FETCH
// 
// const qhttp = require('q-io/http')
// const uri = 'http://localhost:1337'
// qhttp.read(uri)
// .then(JSON.parse)
// .then(console.log)


// MULTIPLE 
// 
// function all(prom1, prom2) {
//     const wait = new Promise(function (fulfill, reject) {
//         let count = 0
//         let results = []
//         function handler(val) {
//             results.push(val)
//             count++
//             console.error(count, results)
//             if (count === 2) {
//             fulfill(results)    
//          }
//         }
//         prom1.then(handler)
//         prom2.then(handler)
//     })
//     return wait
// }
// all(getPromise1(), getPromise2())
// .then(console.log)


// AN IMPORTANT RULE
// 
// function alwaysThrows() {
//     throw new Error('OH NOES')
// }
// function iterate(val) {
//     console.log(val)
//     return val++
// }
// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(null, console.log)


// THROW AN ERROR
// 
// function parsePromised (json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// parsePromised(process.argv[2])
// .then(null, console.log)
// .done()

// VALUES
// 
// function attachTitle(val) {
//     return 'DR. '+val
// }
// const man = Promise.resolve('MANHATTAN')
// man
// .then(attachTitle)
// .then(console.log)


// PROMISE AFTER PROMISE
// 
// first()
// .then(function (resu       lts) {
//     return second(results)
// })
// .then(console.log)


// SHORTCUTS
// 
// const promise = Promise.reject(new Error('I DID NOT FIRE'))
// promise.catch(err => {
//     console.log(err.message)
// })


// ALWAYS ASYNC
// 
// const promise = new Promise(function (fulfill, reject) {
//     fulfill('PROMISE VALUE')
//     reject(new Error('I DID NOT FIRE'))
// })
// function onRejected(err) {
//     console.log(err.message)
// }
// promise.then(console.log, onRejected)
// console.log('MAIN PROGRAM')


// TO REJECT OR NOT TO REJECT
// 
// let promise = new Promise(function (fulfill, reject) {
//     fulfill('I FIRED')
//     reject(new Error('I DID NOT FIRE'))
// })
// function onRejected(err) {
//     console.log(err.message)
// }
// promise.then(console.log, onRejected)


// REJECT
// 
// let promise = new Promise(function (fulfill, reject) {
//     setTimeout( () => {
//         const err = new Error('REJECTED!')
//         reject(err)
//     }, 300)
// })
// function onReject(err) {
//     console.log(err.message)
// }
// promise.then(console.log, onReject)


// FULFILL
// 
// let promise = new Promise(function (fulfill, reject) {
//     setTimeout( () => {
//         fulfill('FULFILLED!')
//     }, 300)
// })
// promise.then(console.log)


// WARM UP
// 
// setTimeout( () => {
//     console.log('TIMED OUT!')
// }, 300)