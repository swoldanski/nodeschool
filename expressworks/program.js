// JSON
// 
// const port = process.argv[2]
// const filename = process.argv[3]
// const express = require('express')
// const fs = require('fs')
// const app = express()
// 
// app.get('/books', (req, res) => {
//     fs.readFile(filename, (err, data) => {
//         let output = JSON.parse(data)
//         res.json(output)
//     })
// })
// 
// app.listen(port)


// QUERY
// 
// const port = process.argv[2]
// const express = require('express')
// const app = express()
// 
// app.get('/search', (req, res) => {
//     let output = req.query
//     res.send(output)
// })
// 
// app.listen(port)



// PARAM
// 
// const port = process.argv[2]
// const express = require('express')
// const crypto = require('crypto')
// const app = express()
// 
// app.put('/message/:id', (req, res) => {
//     let output = crypto
//     .createHash('sha1')
//     .update(new Date().toDateString() + req.params.id)
//     .digest('hex')
//     res.end(output)
// })
// 
// app.listen(port)


// CSS
// 
// const port = process.argv[2]
// const dir = process.argv[3]
// const express = require('express')
// const stylus = require('stylus')
// const app = express()
// 
// app.use(stylus.middleware(dir))
// app.use(express.static(dir))
// 
// app.listen(port)


// FORM
// 
// const port = process.argv[2]
// const express = require('express')
// const bodyparser = require('body-parser')
// const app = express()
// 
// app.use(bodyparser.urlencoded({extended: false}))
// 
// app.post('/form', (req, res) => {
//     let output = req.body.str.split('').reverse().join('')
//     res.end(output)
// })
// 
// app.listen(port)


// PUG
// 
// const port = process.argv[2]
// const templates = process.argv[3]
// const express = require('express')
// const app = express()
// 
// app.set('view engine', 'pug')
// app.set('views', templates)
// 
// app.get('/home', (req, res) => {
//     res.render('index', {date: new Date().toDateString()})
// })
// 
// app.listen(port)


// STATIC
// 
// const port = process.argv[2]
// const dir = process.argv[3]
// const express = require('express')
// const app = express()
// 
// app.use(express.static(dir))
// 
// app.listen(port)


// HELLO WORLD!
// 
// const port = process.argv[2]
// const express = require('express')
// const app = express()
// 
// app.get('/home', (req, res) => {
//     res.end('Hello World!')
// })
// 
// app.listen(port)
