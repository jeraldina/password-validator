const { test } = require('mocha')

function validatePassword(password) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specialChar = '!@#$%^&*()<>?_+}{-=[]\|,./`~'
  const listNumbers = '0123456789'

  let checkLength = false
  let checkLowerCase = true
  let checkSpecialChar = true
  let checkUpperCase = true
  let checkNumber = true

  function passwordLength() {
    if (password.length < 8) {
      // empty
    }
  }

  function passwordLowerCase(lowerCase) {
    if (password.includes(checkLowerCase)) {
      // empty
    }
  }

  function passwordUpperCase(upperCase) {
    if (password.includes(checkUpperCase)) {
      // empty
    }
  }
  function passwordSpecialChar(specialChar) {
    if (password.includes(checkSpecialChar)) {
    // empty
    }
  }
  function passwordNumber(listNumbers) {
    if (password.includes(checkNumber)) {
    // empty
    }
  }

  return checkLength && checkLowerCase && checkUpperCase && checkSpecialChar && checkNumber
}
module.exports = validatePassword
