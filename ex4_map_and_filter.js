function getShortMessages(messages) {
  var map = Array.prototype.map;
  var a = map.call(messages, function(x) { return x.message; })
  return a.filter(function(x) { return x.length < 50 });
}
module.exports = getShortMessages

     