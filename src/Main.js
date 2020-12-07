import { passwordValidator } from './PasswordValidator'
import { isPasswordValid as challengeTwoValidator } from './PasswordValidatorPart2'

const resultChallengeOne = passwordValidator('test_data.txt')
console.log(`Challenge 1: The number of validate passwords in the file is: ${resultChallengeOne}`)

const resultChallengeTwo = passwordValidator('test_data.txt', challengeTwoValidator)
console.log(`Challenge 2: The number of validate passwords in the file using the new validator is: ${resultChallengeTwo}`)
