var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// reach();

//List everyone and for each of them, list the names of who they follow and who follows them
function followsAndFollowers() {
  for(var user in data) {
    var following = [];
    var followers = [];
    following = getFollowing(user);
    followers = getFollowersFromId(user);
    console.log(data[user].name + ' follows ' + following.join(', '));
    console.log(data[user].name + ' is followed by ' + followers.join(', '));
  }
}

//Requires: user object
//Returns: list of user objects
function getFollowing(user, age) {
  age = age || 0;
  var following = [];
  for(var follow in user.follows) {
    if(checkAgeById(user.follows[follow]) > age) {
      following.push(getUserName(user.follows[follow]));
    }
  }
  return following;
}

// function getFollowersFromId(id, age) {
//   age = (age === undefined) ? 0 : age;
//   //age = age || 0;
//   var followers = [];
//   for(var user in data) {
//     for(var follows in data[user].follows) {
//       if(data[user].follows[follows] === id && checkAgeById(data[user].follows[follows]) > age) {
//         followers.push(data[user].name);
//       }
//     }
//   }
//   return followers;
// }

//Requires: user object
//Returns: list of user objects
function getFollowers(user, age) {
  age = age || 0;
  var followers = [];
  for(var id in data) {
    for(var follow in data[id].follows) {
      if(data[id].follows[follow] === getIdFromUser(user) && checkAgeById(data[id].follows[follow]) > age) {
        followers.push(data[id]);
      }
    }
  }
  return followers;
}

function getIdFromUser(user) {
  for(var id in data) {
    if(data[id] === user) {
      return id;
    }
  }
}

function checkAgeById(id) {
  return data[id].age;
}

function getUserName(id) {
  return data[id].name;
}

function getUserFromId(id) {
  return data[id];
}

// TODO: What if equal
//Identify who follows the most people
function mostFollowing() {
  var most = 0;
  var mostUsers = [];
  for(var user in data) {
    if(getFollowing(data[user]).length > most) {
      mostUsers = [data[user].name];
      most = getFollowing(data[user]).length;
    } else if(getFollowing(data[user]).length === most) {
      mostUsers.push(data[user].name);
    }
  }
  if(mostUsers.length > 1) {
    console.log(`${mostUsers.join(', ')} are following the most people with ${most}.`);
  } else {
    console.log(`${mostUsers.join(', ')} is following the most people with ${most}.`);
  }
}

// TODO: What if equal
//Identify who has the most followers
function mostFollowers() {
  var most = 0;
  var mostUsers = [];
  for(var user in data) {
    var followers = getFollowers(data[user]);
    if(followers.length > most) {
      most = followers.length;
      mostUsers = [data[user].name];
    } else if(followers.length === most) {
      mostUsers.push(data[user].name);
    }
  }
  if(mostUsers.length > 1) {
    console.log(`${mostUsers.join(', ')} are following the most people with ${most}.`);
  } else {
    console.log(`${mostUsers.join(', ')} is following the most people with ${most}.`);
  }
}

mostFollowing();

//TODO: Utilize callbacks for over 30, refactor getFollowersFromId to not need age
//Identify who has the most followers over 30
function mostFollowersOver30() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    var followers = getFollowers(data[user], 30);
    if(followers.length > most) {
      most = followers.length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' has the most followers over 30 with ' + most + '.');
}

//TODO: Utilize callbacks for over 30, refactor getFollowing to not need age
//Identify who follows the most people over 30
function mostFollowingOver30() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    // var following = getFollowing(user);
    // var followingOver30 = list.map(function(getfollowing) {
    //   while(following.length--) {
    //     if(user.age > 30) {
    //       return user;
    //     }
    //   }
    // });
    if(getFollowing(user, 30).length > most) {
      most = getFollowing(user).length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' is following the most people over 30 with ' + most + '.');
}

//List those who follow someone that doesn't follow them back
function followingButNotFollowed() {
  var unfollowed = [];
  for(var user in data) {
    for(var follow in data[user].follows) {
      if(!isFollowedBy(user, data[user].follows[follow]) && !unfollowed.includes(getUserName(user))) {
        unfollowed.push(getUserName(user));
      }
    }
  }
  console.log(unfollowed);
}

function isFollowedBy(id1, id2) {
  var followers = getFollowersFromId(id2);
  return followers.includes(getUserName(id1));
}

//List everyone and their reach (sum of # of followers and # of followers of followers)
function reach() {
  for(var user in data) {
    var reach = getFollowersFromId(user).length;
    for(var follow in data[user].follows) {
      var follwerfollowers = getFollowersFromId(data[user].follows[follow]).length;
      reach += follwerfollowers;
    }
    console.log(data[user].name + ' has a reach of ' + reach + '.');
  }
}