function loadUsers(userIds, load, done) {
  let completd = 0;
  var users = [];
  userIds.forEach(function(id, index){
    load(id, function(user){
      users[index] = user
      if(++completed === userIds.length){
        return done(users)
      }
    })
  })
}

module.exports = loadUsers
