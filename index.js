const { test } = require("mocha")

function validatePassword(password){
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const specialChar = '!@#$%^&*()<>?_+}{-=[]\|,./`~'

let checkLength = false
let checkLowerCase = true
let checkSpecialChar = true
let checkUpperCase = true

function passwordLength(){
if (password.length < 8) return checkLength
}

function passwordLowerCase(){
if (password.includes(lowerCase)){

    return checkLowerCase
} 
}
// console.log = 

function passwordUpperCase(){
if (password.includes(upperCase)){

    return checkUpperCase
} 
}
function passwordSpecialChar(){
if (password.includes(specialChar)){

    return checkSpecialChar
} 
}

//hold variable with answer true
// 
return checkLength && checkLowerCase && checkUpperCase && checkSpecialChar
}
module.exports = validatePassword

// arrayDiff(testArrayOne, testArrayTwo)
// let thirdArrayAnswer = []

// for (let i = 0; i < arrayDiff.length; i++)
// if (testArrayOne[i] not in testArrayTwo)
// thirdArrayAnswer.push(testArrayOne[i])