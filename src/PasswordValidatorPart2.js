import { passwordValidator as passwordValidatorTwo } from './PasswordValidator'

export const isPasswordValid = (input) => {
  const charAtMin = input.password.charAt(input.min - 1)
  const charAtMax = input.password.charAt(input.max - 1)
  return (charAtMax === input.character && charAtMin !== input.character) || (charAtMax !== input.character && charAtMin === input.character)
}

export const passwordValidator = (fileName) => {
  return passwordValidatorTwo(fileName, isPasswordValid)
}
