import { pascalCase } from 'change-case'

export default (name) => {
  // react-native prefix only used to identify package out of RN context.
  const unprefixed = name.replace(/^react-native-/, '')

  return {
    regular: name,
    pascal: pascalCase(unprefixed),
  }
}
