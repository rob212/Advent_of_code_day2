import { passwordValidator, isPasswordValid as validatorOne } from './PasswordValidator'
import { isPasswordValid as validatorTwo } from './PasswordValidatorPart2'

const resultChallengeOne = passwordValidator('test_data.txt', validatorOne)
console.log(`Challenge 1: The number of validate passwords in the file is: ${resultChallengeOne}`)

const resultChallengeTwo = passwordValidator('test_data.txt', validatorTwo)
console.log(`Challenge 2: The number of validate passwords in the file using the new validator is: ${resultChallengeTwo}`)
