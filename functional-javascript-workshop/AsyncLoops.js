function loadUsers(userIds, load, done) {
  var completed = 0
  var users = []

  userIds.map(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++completed === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
