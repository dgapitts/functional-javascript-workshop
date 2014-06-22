function checkUsersValid(goodUsers) {
	  //console.log(goodUsers)
	  var map = Array.prototype.map;
      var goodUsersIDs = map.call(goodUsers, function(x) { return x.id; });

      //console.log(goodUsersIDs)	
      return function(submittedUsers) {
      	var submittedUsersIDs = map.call(submittedUsers, function(x) { return x.id; });
      	var passed = submittedUsersIDs.every((function (x) { return goodUsersIDs.indexOf(x) > -1}))
      	return passed;
        // SOLUTION GOES HERE
      };
    }

module.exports = checkUsersValid
     