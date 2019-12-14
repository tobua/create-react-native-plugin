#!/usr/bin/env node

const { resolve } = require('path')
const { ensureDirSync, emptyDirSync, existsSync, copySync } = require('fs-extra')
const { execSync } = require('child_process')
const names = require('./names')
const customize = require('./customize')

const args = process.argv
if (args.length < 3) {
  return console.error('Please provide a name for your plugin.')
}

const name = names(args[2])

if (existsSync(name.regular)) {
  return console.warn(
    `A folder or file named ${name.regular} already exists in ${process.cwd()}.`
  )
}

ensureDirSync(name.regular)
emptyDirSync(name.regular)

const templateDirectory = resolve(__dirname, 'template')

const destinationDirectory = resolve(process.cwd(), name.regular)

copySync(templateDirectory, destinationDirectory)

customize(name, destinationDirectory)

console.log('Installing dependencies...')

execSync('npm i', { cwd: name.regular, stdio : 'pipe' })

console.log('')
console.log(`😃 Created new plugin called ${name.regular} in ${destinationDirectory}.`)
console.log(`🛠️  Start coding in the file src/index.js.`)
console.log(`🛠️  To preview the plugin edit app/App.js and create a RN installation with:`)
console.log(`🐚 cd ${name.regular}`)
console.log('🐚 npm run app')
