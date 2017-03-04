'use strict'
const _ = require('lodash')


const gettingStarted = function (data) {
    return _.filter(data, {active: true})
}

const sortMe = data => {
    return _.sortBy(data, 'quantity' ).reverse()
}

const inEveryCase = data => {
    return _.forEach(data, function(item) {
        console.log(item.population)
    })
}


module.exports = inEveryCase