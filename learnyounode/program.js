// ex 7


// ex 6
// const ex6 = require('./ex6.js')
// ex6(process.argv[2], process.argv[3], (err, list) => {
//     if (err) return console.log(err)
//     list.forEach((v) => console.log(v))
// })

// ex 5
// const fs = require('fs')
// const path = require('path')
// const ext = '.' + process.argv[3]
// fs.readdir(process.argv[2], (err, list) => {
//     if (err) {
//         return console.log(err)
//     }
//     const filtered = list.filter( (val) => {
//         return path.extname(val) === ext
//     })
//     filtered.forEach( (v) => console.log(v))
// })

// ex 4
// const fs = require('fs')
// fs.readFile(
//     process.argv[2],
//     'utf8',
//     (err, data) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log( data.split('\n').length - 1)
// })

// ex 3
// const fs = require('fs')
// const buf = fs.readFileSync(process.argv[2])
// const str = buf.toString()
// const arr = str.split('\n')
// console.log(arr.length - 1)

// ex 2
// const args = process.argv.slice(2);
// const res = args.reduce( (prev, cur) => {
//     return prev + Number(cur);
// }, 0 );
// console.log( res );
 
// ex 1
// console.log('HELLO WORLD');
