// MEET PIPE
// const fs = require('fs')
// const filename = process.argv[2]
// fs.createReadStream(filename).pipe(process.stdout)

// IO
// process.stdin.pipe(process.stdout)

// TRANSFORM
// const through = require('through2')
// const tr = through(write, end)
// function write (buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase())
//     next()
// }
// function end (done) {
//     done()
// }
// process.stdin.pipe(tr).pipe(process.stdout)

// LINES
// const map = require('through2')
// const split = require('split')
// let count = 0
// process.stdin
//     .pipe(split())
//     .pipe(map(function (line, _, next){
//         count ++
//         (count % 2 === 0) ? this.push(line.toString().toUpperCase()) :
//          this.push(line.toString().toLowerCase())
//          this.push('\n')
//         next()        
//     }))
//     .pipe(process.stdout)

// CONCAT
// const concat = require('concat-stream')
// process.stdin.pipe(concat ( body => {
//     console.log(body.reverse().toString())
// }))

// HTTP SERVER
// const http = require('http')
// const map = require('through2')
// const port = parseInt(process.argv[2])
// const server = http.createServer( (req, res) => {
//     if (req.method === 'POST') {
//         req.pipe(map( function (chunk, _, next) {
//             this.push(chunk.toString().toUpperCase())
//             next()
//         })).pipe(res)
//     }
//     else res.end('only POST supported\n')
// })
// server.listen(port)

// HTTP CLIENT
// const request = require('request')
// process.stdin
// .pipe(request.post('http://localhost:8099'))
// .pipe(process.stdout)

// WEBSOCKETS
// const ws = require('websocket-stream')
// const stream = ws('ws://localhost:8099')
// stream.write('hello\n')

// HTML STREAM
// const trumpet = require('trumpet')
// const map = require('through2')
// const tr = trumpet()
// const ws = tr.select('.loud').createStream()
// ws.pipe(map( function (chunk, _, next) {
//     this.push(chunk.toString().toUpperCase())
//     next()
// })).pipe(ws)
// process.stdin.pipe(tr).pipe(process.stdout)

// DUPLEXER
// const spawn = require('child_process').spawn
// const du2 = require('duplexer2')
// module.exports = function (cmd, args) {
//     const child = spawn(cmd, args)
//     return du2(child.stdin, child.stdout)
// }

// DUPLEXER REDUX
// const duplexer2 = require('duplexer2')
// const tr = require('through2')
// module.exports = function (counter) {
//     let counts = {}
//     const inp = tr.obj(write, end)

//     function write(data, _, next) {
//         counts[data.country] = (counts[data.country] || 0) + 1
//         next()
//     }

//     function end(done) {
//         counter.setCounts(counts)
//         done()
//     }
    
//     return duplexer2({objectMode: true}, inp, counter)
// }

// COMBINER
// const combine = require('stream-combiner')
// const split = require('split')
// const tr = require('through2')
// const zlib = require('zlib')
// module.exports = function () {
//     let output = {name: '', books: []}
//     const map = tr.obj(write, end) 
    
//     function write(src, _, next) {
//         if (src.length === 0) return next();
//         let row = JSON.parse(src)
//         // console.error(row, output)
//         if (row.type === 'book') {
//             output.books.push(row.name)
//             // console.error(output)
//         }
//         if ((row.type === 'genre') & (output.name === '')) {
//             // console.error(2)
//             output.name = row.name
//             // console.error(output)
//         } 
//         if ((row.type === 'genre') & (output.name !== row.name)) {
//             // console.error(3)
//             this.push(JSON.stringify(output)+'\n')
//             // console.error(JSON.stringify(output))
//             output = {name: row.name, books: []}
//         }
//         next()
//     }
//     function end(done) {
//         if (output) this.push(JSON.stringify(output)+'\n')
//         done()
//     }
//     return combine(split(), map, zlib.createGzip())
// }

// CRYPT
// const crypto = require('crypto')
// const passphrase = process.argv[2]
// const stream = crypto.createDecipher('AES256', passphrase)
// process.stdin
// .pipe(stream)
// .pipe(process.stdout)

// SECRETZ
// const tar = require('tar')
// const zlib = require('zlib')
// const crypto = require('crypto')
// const concat = require('concat-stream')
// const cipher = process.argv[2]
// const passphrase = process.argv[3]
// const decrypt = crypto.createDecipher(cipher, passphrase)
// const gunzip = zlib.createGunzip()
// const parser = tar.Parse()
// parser.on('entry', function (e) {
//     if (e.type === 'File') {
//         // console.error(e)
//         let md5 = crypto.createHash('md5', {encoding: 'hex'})
//         e.pipe(md5).pipe(concat( function(hash) {
//             console.log(hash + ' ' + e.path)
//         }))
//     }
// })
// process.stdin
// .pipe(decrypt)
// .pipe(gunzip)
// .pipe(parser)
