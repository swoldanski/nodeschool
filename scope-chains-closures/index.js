function foo() {
    var bar = 0
    quux = 1

    function zip() {
        var quux = 2
        bar = true
    }

    return zip
}