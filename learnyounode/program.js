// ex 13
const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer( (req, res) => {
    if (req.method !== 'GET') {
        return res.end('only GET supported here\n')
    }
    
    const parsedUrl = url.parse(req.url, true)

    const date = new Date()
    date.setTime(Date.parse(parsedUrl.query.iso))

    res.writeHead(200, { 'Content-Type': 'application/json' })

    switch (true) {
        case (parsedUrl.pathname === '/api/parsetime'):
            output = {
                "hour": date.getHours(),  
                "minute": date.getMinutes(),  
                "second": date.getSeconds()
            }
            res.write(JSON.stringify(output))
            break;
        
        case (parsedUrl.pathname === '/api/unixtime'):
            output = {
                'unixtime' : date.valueOf()
            }
            res.write(JSON.stringify(output))
            break;
        
        default:
            break;
    }
    res.end()
})
server.listen(port)

// ex 12
// const http = require('http')
// const map = require('through2-map')
// const port = process.argv[2]

// const server = http.createServer( (req, res) => {
//     if (req.method !== 'POST') {
//         return res.end('only POST supported here\n')
//     }

//     req.pipe(map( (chunk) => {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })
// server.listen(port)

// ex 11
// const http = require('http')
// const fs = require('fs')
// const port = process.argv[2]
// const fileName = process.argv[3]
// const server = http.createServer( (req, res) => {
//     const stream = fs.createReadStream(fileName).pipe(res)
// })
// server.listen(port)



// ex 10
// const net = require('net')
// var strftime = require('strftime')
// const port = process.argv[2]
// const server = net.createServer( (socket) => {
//     socket.end(strftime('%F %R')+'\n')
    
//     socket.on("err", (err) => {
//         throw err
//     })
// })
// server.listen(port)


// ex 9
// const http = require('http')
// const urls = process.argv.slice(2)
// let results = []
// let count = 0

// urls.forEach( (url, index) => {
//     http.get(url, (res) => {
//         let list = []
//         res.setEncoding('utf8')
//         res.on("data", (data) => {
//             list.push(data)
//         })
//         res.on("end", () => {
//             const output = list.join('')
//             done(index, output)
//         })
//         res.on("err", (err) => {
//             return console.error(err)
//         })
//     })

// })

// function done(index, data){
//     results[index] = data
//     count ++
//     if (count === urls.length) {
//         results.forEach( (line) => {
//             console.log(line)
//         })
//     }
// }



// ex 8
// const http = require('http')
// const url = process.argv[2]
// http.get(url, (res) => {
//     let list = []
//     res.setEncoding('utf8')
//     res.on("data", (data) => {
//         list.push(data)
//     })
//     res.on("end", () => {
//         const output = list.join('')
//         console.log(output.length)
//         console.log(output)
//     })
//     res.on("err", (err) => {
//         return console.error(err)
//     })
// })


// // ex 7
// const http = require('http')
// const url = process.argv[2]
// http.get(url, (res) => {
//     res.setEncoding('utf8')
//     res.on("data", (data) => {
//         console.log(data)
//     })
// })

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
