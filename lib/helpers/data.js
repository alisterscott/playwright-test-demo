const { v4: uuidv4 } = require('uuid')

const UserObject = function () {
  return {
    firstName: 'Sammy',
    lastName: 'Snake',
    userName: `${uuidv4()}@hotmail.com`
  }
}

class UserClass {
  constructor () {
    this.firstName = 'Kimmy'
    this.lastName = 'Kangaroo'
    this.userName = `${uuidv4()}@hotmail.com`
  }
}

module.exports = {
  UserClass,
  UserObject
}
