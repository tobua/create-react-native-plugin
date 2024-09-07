import { execSync } from 'node:child_process'
import { cpSync, renameSync, rmSync } from 'node:fs'

// This script enhances source files inside /app with a fresh React Native template.
const appName = '<%= pascal %>App'

console.log('⌛ Initializing a fresh RN project...')

execSync(`bunx @react-native-community/cli init ${appName} --skip-git-init true --install-pods true`, {
  // Write output to cnosole.
  stdio: 'inherit',
})

cpSync('app/App.tsx', `${appName}/App.tsx`)
rmSync('app', { recursive: true })
renameSync(appName, 'app')

// Install package to app.
const output = execSync('bun pm pack', {
  encoding: 'utf-8',
})
const tgzFileName = output.match(/[\w.-]+\.tgz/)[0]
execSync(`bun install ../${tgzFileName}`, {
  cwd: './app',
})

console.log('')
console.log('🍞 React Native App created inside /app.')
console.log('🛠️  To run the example with the plugin included:')
console.log('🐚 cd app')
console.log('🐚 bun ios / bun android')
console.log('🌪️  To copy over the changes from the plugin source run:')
console.log('🐚 bun copy')
console.log('🛠️  This will copy changes over to the app.')
