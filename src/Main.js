import { passwordValidator, isPasswordValid as validatorOne } from './PasswordValidator'
import { isPasswordValid as validatorTwo } from './PasswordValidatorPart2'

const resultChallengeOne = passwordValidator('test_data.txt', validatorOne)
console.log(`The number of validate passwords in the file is: ${resultChallengeOne}`)

const resultChallengeTwo = passwordValidator('test_data.txt', validatorTwo)
console.log(`The number of validate passwords in the file is: ${resultChallengeTwo}`)
