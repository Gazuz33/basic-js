const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }

  let team = []
  let bezpr = ''

  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] == "string") {
      bezpr = members[i].trim()
      team.push( bezpr[0].toUpperCase())
    }
  }
  return team.sort().join('')
}
