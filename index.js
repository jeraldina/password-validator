function validatePassword(password){
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const specialChar = '!@#$%^&*()_+-={[}]|\:;<./>?,`~'

if (password.length < 8) return false
    else return true

if (password(lowerCase.includes.lowerCase)) return true
    else return false

if (password.includes(upperCase)) return true
    else return false

if (password.includes(specialChar)) return true
    else return false

// if password.//( has at least one lowercase)
// if password.//( has at least one uppercase)
// if password.//( has at least one numeric value)
// if password.//( has at least one special character)
}

module.exports = validatePassword