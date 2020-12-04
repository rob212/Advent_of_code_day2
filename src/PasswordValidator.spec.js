import { formatData, getTestDataFromFile, isPasswordValid, passwordValidator } from './PasswordValidator'

// Test password is within given boundaries
const cases = [
  ['password length equals max boundary of characters: ', { min: 1, max: 3, character: 's', password: 'sgshst' }, true],
  ['password length equals min boundary of characters: ', { min: 1, max: 3, character: 's', password: 'sght' }, true],
  ['password length is above max boundary of characters: ', { min: 1, max: 3, character: 's', password: 'sssssgssj' }, false],
  ['password length is below min boundary of characters: ', { min: 13, max: 17, character: 's', password: 'sssssgssj' }, false],
  ['password contains no matching characters: ', { min: 1, max: 2, character: 's', password: 'cat' }, false],
  ['password has both the min and max matching characters: ', { min: 1, max: 1, character: 's', password: 'cubs' }, true],
  ['password length is within boundary of characters: ', { min: 13, max: 17, character: 's', password: 'ssssssssssssgsssj' }, true]
]
test.each(cases)('%s isPasswordValid(%s) should be %s', (title, input, expected) => {
  expect(isPasswordValid(input)).toBe(expected)
})

// Main test of the entire program execution
test('passwordValidator can succesfully tally the number for valid passwords from a file', () => {
  expect(passwordValidator('test_data_extract.txt')).toBe(1)
})

test('can parse input string into object form', () => {
  const expected = {
    min: 13,
    max: 17,
    character: 's',
    password: 'ssssssssssssgsssj'
  }
  expect(formatData('13-17 s: ssssssssssssgsssj')).toEqual(expected)
})

test('can read data from file', () => {
  const expected = [
    {
      min: 13,
      max: 17,
      character: 's',
      password: 'ssssssssssssgsssj'
    },
    {
      min: 7,
      max: 9,
      character: 'p',
      password: 'pnlzhcppvl'
    }
  ]
  expect(getTestDataFromFile('test_data_extract.txt')).toEqual(expected)
})
