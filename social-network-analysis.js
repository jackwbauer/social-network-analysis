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

mostFollowingOver30();

function followsAndFollowers() {
  for(var user in data) {
    var following = [];
    var followers = [];
    following = getFollowing(user);
    followers = getFollowers(user);
    console.log(data[user].name + ' follows ' + following.join(', '));
    console.log(data[user].name + ' is followed by ' + followers.join(', '));
  }
}

function getFollowing(id, age) {
  age = (age === undefined) ? 0 : age;
  var following = [];
  for(var follow in data[id].follows) {
    if(checkAge(data[id].follows[follow]) > 30) {
      following.push(getUserName(data[id].follows[follow]));
    }
  }
  return following;
}

function getFollowers(id, age) {
  age = (age === undefined) ? 0 : age;
  var followers = [];
  for(var user in data) {
    for(var follows in data[user].follows) {
      if(data[user].follows[follows] === id && checkAge(data[user].follows[follows]) > 30) {
        followers.push(data[user].name);
      }
    }
  }
  return followers;
}

function checkAge(id) {
  return data[id].age;
}

function getUserName(id) {
  return data[id].name;
}

// TODO: What if equal
function mostFollowing() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    if(getFollowing(user).length > most) {
      most = getFollowing(user).length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' is following the most people with ' + most + '.');
}

// TODO: What if equal
function mostFollowers() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    if(getFollowers(user).length > most) {
      most = getFollowers(user).length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' has the most followers with ' + most + '.');
}

function mostFollowersOver30() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    if(getFollowers(user).length > most) {
      most = getFollowers(user).length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' has the most followers over 30 with ' + most + '.');
}

function mostFollowingOver30() {
  var most = 0;
  var mostId = '';
  for(var user in data) {
    if(getFollowing(user, 30).length > most) {
      most = getFollowing(user).length;
      mostId = user;
    }
  }
  console.log(data[mostId].name + ' is following the most people over 30 with ' + most + '.');
}

function listFollowingButNotFollowed() {

}

function reach() {

}