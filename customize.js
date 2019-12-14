const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs-extra')

const files = [
  'app/App.js',
  'src/index.js',
  'test/basic.test.js',
  'test/docs.test.js',
  '.flowconfig',
  'create-app.js',
  'package.json',
  'README.md'
]

// Replace template values with plugin name.
module.exports = (name, directory) => {
  const replaceTemplateVariables = file => {
    const filePath = join(directory, file)
    let contents = readFileSync(filePath, 'utf-8')

    contents = contents.replace(/<%= name %>/g, name.regular)
    contents = contents.replace(/<%= pascal %>/g, name.pascal)

    writeFileSync(filePath, contents, 'utf-8')
  }

  files.forEach(replaceTemplateVariables)
}
