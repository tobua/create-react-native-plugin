#!/usr/bin/env node
import { join } from 'path'
import { execSync } from 'child_process'
import copy from 'recursive-copy'
import rimraf from 'rimraf'

// Enhances source files inside /app with a fresh RN project template.
const appName = 'MyPluginApp'

console.log('⌛ Initializing a fresh RN project...')

execSync(`npx react-native init ${appName}`, {
  // Write output to cnosole.
  stdio: 'inherit',
})

// Copy to destination directory, leaving source files untouched.
await copy(appName, 'app', {
  dot: true,
  overwrite: false,
  filter: ['**/*', '!App.js'],
})

// Remove temporary project directory.
rimraf.sync(appName)

// Install this package locally, avoiding symlinks.
execSync('npm install $(npm pack .. | tail -1) --legacy-peer-deps', {
  cwd: join(process.cwd(), 'app'),
  stdio: 'inherit',
})

console.log('')
console.log('🍞 React Native App created inside /app.')
console.log('🛠️  To run the example with the plugin included:')
console.log('🐚 cd app')
console.log('🐚 npm run ios / npm run android')
console.log('🌪️  To copy over the changes from the plugin source run:')
console.log('🐚 npm run watch')
console.log('🛠️  This will copy changes over to the app.')
