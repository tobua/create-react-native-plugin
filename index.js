#!/usr/bin/env node
import { join } from 'path'
import { existsSync, unlinkSync, rmdirSync, lstatSync, mkdirSync } from 'fs'
import { copySync } from 'fs-extra'
import { execSync } from 'child_process'
import names from './names.js'
import customize from './customize.js'

const args = process.argv

if (args.length < 3) {
  console.error('Please provide a name for your plugin.')
  process.exit()
}

const name = names(args[2])

if (existsSync(name.regular)) {
  console.warn(
    `A folder or file named ${name.regular} already exists in ${process.cwd()}.`
  )
  process.exit()
}

if (existsSync(name.regular)) {
  if (lstatSync(name.regular).isDirectory()) {
    rmdirSync(name.regular, { recursive: true })
  } else {
    unlinkSync(name.regular)
  }
}

mkdirSync(name.regular)

console.log(process.env.PWD, 'debug', process.env.INIT_CWD)

process.exit()

const templateDirectory = join(__dirname, 'template')
const destinationDirectory = join(process.cwd(), name.regular)

copySync(templateDirectory, destinationDirectory)

customize(name, destinationDirectory)

console.log('Installing dependencies...')

execSync('npm i', { cwd: destinationDirectory, stdio: 'pipe' })

console.log('')
console.log(
  `😃 Created new plugin called ${name.regular} in ${destinationDirectory}.`
)
console.log(`🛠️  Start coding in the file src/index.js.`)
console.log(
  `🛠️  To preview the plugin edit app/App.js and create a RN installation with:`
)
console.log(`🐚 cd ${name.regular}`)
console.log('🐚 npm run app')
