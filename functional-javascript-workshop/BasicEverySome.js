function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
   return submittedUsers.every(item => goodUsers.includes(item))
  };
}
module.exports = checkUsersValid
