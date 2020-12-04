const fs = require('fs')
const path = require('path')

export const formatData = (data) => {
  const array = data.split(' ')
  const limits = array[0].split('-')
  const min = parseInt(limits[0])
  const max = parseInt(limits[1])
  const character = array[1].charAt(0)
  const password = array[2]

  return {
    min: min,
    max: max,
    character: character,
    password: password
  }
}

export const isPasswordValid = (input) => {
  const password = input.password
  const matchResult = password.match(new RegExp(input.character, 'g'))
  const numberOfLetters = matchResult !== null ? matchResult.length : 0
  return numberOfLetters >= input.min && numberOfLetters <= input.max
}

export const getTestDataFromFile = (fileName) => {
  const dirPath = path.join(__dirname, '../data')
  const dataAsStrings = fs.readFileSync(`${dirPath}/${fileName}`).toString('utf-8').split('\n')
  const output = dataAsStrings.map(data => formatData(data))
  return output
}

export const passwordValidator = (fileName, validator = isPasswordValid) => {
  let tally = 0
  const dataSet = getTestDataFromFile(fileName)
  dataSet.forEach(input => {
    if (validator(input)) {
      tally += 1
    }
  })
  return tally
}
