const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err)

        const filtered = list.filter( (val) => {
            
            return path.extname(val) === ('.' + ext)
        })
        
        callback(null, filtered)
        
    })
}