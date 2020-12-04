import { isPasswordValid, passwordValidator } from './PasswordValidatorPart2'

// Test password is within given boundaries
const cases = [
  ['valid: position 1 contains a and position 3 does not: ', { min: 1, max: 3, character: 'a', password: 'abcde' }, true],
  ['valid: position 1 does not contains a and position 3 does: ', { min: 1, max: 3, character: 'a', password: 'wbade' }, true],
  ['invalid: neither position 1 nor position 3 contains b: ', { min: 1, max: 3, character: 'b', password: 'cdefg' }, false],
  ['invalid: both position 2 and position 9 contain c: ', { min: 2, max: 9, character: 'c', password: 'ccccccccc' }, false],
  ['invalid: min and max are the same therefore cannot be valid ', { min: 2, max: 2, character: 'c', password: 'acd' }, false]

]
test.each(cases)('%s isPasswordValid(%s) should be %s', (title, input, expected) => {
  expect(isPasswordValid(input)).toBe(expected)
})

// Main test of the entire program execution
test('passwordValidator can succesfully tally the number for valid passwords from a file', () => {
  expect(passwordValidator('test_data_extract.txt')).toBe(1)
})
