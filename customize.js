import { join } from 'path'
import { existsSync, readFileSync, writeFileSync } from 'fs'

const files = [
  'app/App.js',
  'test/basic.test.tsx',
  'test/docs.test.tsx',
  'test/tsconfig.json',
  '.gitignore',
  'babel.config.json',
  'create-app.js',
  'index.tsx',
  'package.json',
  'README.md',
  'tsconfig.json',
]

// Replace template values with plugin name.
export default (name, directory) => {
  const replaceTemplateVariables = (file) => {
    const filePath = join(directory, file)

    if (!existsSync(filePath)) {
      return
    }

    let contents = readFileSync(filePath, 'utf-8')

    contents = contents.replace(/<%= name %>/g, name.regular)
    contents = contents.replace(/<%= pascal %>/g, name.pascal)

    writeFileSync(filePath, contents)
  }

  files.forEach(replaceTemplateVariables)
}
