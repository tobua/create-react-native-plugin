#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { cpSync, existsSync, lstatSync, mkdirSync, renameSync, rmdirSync, unlinkSync } from 'node:fs'
import { dirname, join } from 'node:path'
import customize from './customize.js'
import names from './names.js'

const args = process.argv

if (args.length < 3) {
  console.error('Please provide a name for your plugin.')
  process.exit()
}

const name = names(args[2])

if (existsSync(name.regular)) {
  console.warn(`A folder or file named ${name.regular} already exists in ${process.cwd()}.`)
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

const npmPackagePath = dirname(new URL(import.meta.url).pathname)

const templateDirectory = join(npmPackagePath, 'template')
const destinationDirectory = join(process.cwd(), name.regular)

cpSync(templateDirectory, destinationDirectory, { recursive: true })

const npmIgnorePath = join(destinationDirectory, '.npmignore')

if (existsSync(npmIgnorePath)) {
  // npm will apparently rename .gitignore outside a repo to prevent accidentially publishing.
  // Since this template specifies "files" in package.json that doesn't happen.
  renameSync(npmIgnorePath, join(destinationDirectory, '.gitignore'))
}

customize(name, destinationDirectory)

console.log('Installing dependencies...')

execSync('npm install --legacy-peer-deps', {
  cwd: destinationDirectory,
  stdio: 'inherit',
})

console.log('')
console.log(`😃 Created new plugin called ${name.regular} in ${destinationDirectory}.`)
console.log('🛠️  Start coding in the file ./index.tsx.')
console.log('🛠️  To preview the plugin edit app/App.tsx and create a RN installation with:')
console.log(`🐚 cd ${name.regular}`)
console.log('🐚 npm run app')
