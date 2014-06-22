function doubleAll(numbers) {
    var map = Array.prototype.map;
    var a = map.call(numbers, function(x) { return x*2; });
    return a;
}

module.exports = doubleAll
