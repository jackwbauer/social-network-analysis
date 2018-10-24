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

mostFollowing();

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

function getFollowing(id) {
  var following = [];
  for(var follow in data[id].follows) {
    following.push(getUserName(data[id].follows[follow]));
  }
  return following;
}

function getFollowers(id) {
  var followers = [];
  for(var user in data) {
    for(var follows in data[user].follows) {
      if(data[user].follows[follows] === id) {
        followers.push(data[user].name);
      }
    }
  }
  return followers;
}

function getUserName(id) {
  return data[id].name;
}

function mostFollowing() {
  var most = 0;
  for(var user in data) {
    if(getFollowing(user).length > most) {
      most = getFollowing(user).length;
    }
  }
  console.log(data[user].name + ' is following the most people with ' + most + '.');
}

function mostFollowers() {

}

function mostFollowersOver30() {

}

function mostFollowingOver30() {

}

function listFollowingButNotFollowed() {

}

function reach() {

}