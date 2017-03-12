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
        let size = ''
        switch (true) {
            case item.population >= 1.0:
                size = 'big';
                break;
            case item.population >= 0.50:
                size = 'med';
                break;
            case item.population >= 0.0:
                size = 'small';
                break;
        
        
            default:
                break;
        }

        item.size = size
    })
}

const everyoneIsMin = data => {
    const temp = function(item) {
        return item > 19
    }

    let res = {
        hot: [],
        warm: []
    }

    _.forEach(data, function(city, name) {

        if (_.every(city, temp )) res.hot.push(name)
        else if (_.some(city, temp )) res.warm.push(name) 

    })
    
    return res
}

const chainMail = data => {
    return _.chain(data)
    .sortBy()
    .map(function(item) {
        return item + 'Chained' 
    })
    .map(function(item) {
        return item.toUpperCase()
    })
}

const countTheComments = data => {
    let result = []
    let firstPass = _.groupBy(data, 'username')

    _.forEach(firstPass, function(item, key){
        console.log(key)
        result.push({
            username: key,
            comment_count: _.size(item)
        }) 
    })

    return _.sortBy(result, 'comment_count').reverse()
}

const giveMeanOverview = data => {
    let result = []

    var firstPass =  _.reduce(data, function(acc, val, key){
        let ind = val.article
        
        acc[val.article] = val.quantity + (acc[val.article] === undefined ? 0 : acc[val.article])
        return acc
    } , {})

    _.forEach(firstPass, function(val, key){
        console.log(val, key)
        result.push({
            'article': Number(key),
            'total_orders': val
        })
    })

    result = _.sortBy(result, 'total_orders')
    return result.reverse()
}

const analyze = data => {
    let result = {
        'average': 0,
        'underperform': [],
        'overperform': []
    }

    result.average = _.reduce(data, function(acc, item){
        return acc + item.income
    }, 0) / _.size(data)

    result.underperform = _.filter(data, function(item){
        return item.income <= result.average
    })
    result.underperform = _.sortBy(result.underperform, 'income')
    
    result.overperform = _.filter(data, function(item){
        return item.income > result.average
    })
    result.overperform = _.sortBy(result.overperform, 'income')

    return result
}

const startTemplating = data => {
    return _.template('Hello <%= name %> (logins: <%= logins %>)')({ name: data.name, logins: _.size(data.login)})
}

module.exports = startTemplating