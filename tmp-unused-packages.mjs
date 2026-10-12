import fs from 'node:fs'

const pkgPath = 'package.json'
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

const removeFromDependencies = [
  '@expo/metro-config',
  '@expo/webpack-config',
  '@fontsource/inter',
  '@modelcontextprotocol/sdk',
  '@storybook/manager-api',
  'expo',
  'expo-splash-screen',
  'expo-status-bar',
  'glob',
  'react-native',
  'react-native-svg',
  'react-native-svg-transformer',
  'react-native-web',
  'snippet',
]

const removeFromDevDependencies = [
  '@chromatic-com/storybook',
  '@chromaui/addon-visual-tests',
  '@expo/cli',
  '@expo/metro-runtime',
  '@nx-tools/container-metadata',
  '@nx/cypress',
  '@nx/detox',
  '@nx/expo',
  '@nx/express',
  '@nx/node',
  '@nx/playwright',
  '@storybook/addon-coverage',
  '@storybook/addon-storysource',
  '@storybook/react-webpack5',
  '@svgr/webpack',
  '@testing-library/jest-native',
  '@testing-library/react-native',
  '@types/react-router-dom',
  '@types/styled-system',
  '@vitest/ui',
  'babel-loader',
  'babel-preset-expo',
  'css-loader',
  'cypress',
  'detox',
  'eas-cli',
  'eslint-config-react-app',
  'eslint-plugin-cypress',
  'expo-cli',
  'jest-environment-node',
  'jest-expo',
  'jest-util',
  'metro',
  'metro-resolver',
  'nx-cloud',
  'prop-types',
  'react-test-renderer',
  'style-loader',
]

const missing = []
for (const name of removeFromDependencies) {
  if (!(name in pkg.dependencies)) missing.push(`dependencies:${name}`)
  delete pkg.dependencies[name]
}
for (const name of removeFromDevDependencies) {
  if (!(name in pkg.devDependencies)) missing.push(`devDependencies:${name}`)
  delete pkg.devDependencies[name]
}

if (missing.length) {
  console.error('Missing packages:', missing.join(', '))
  process.exit(1)
}

fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
console.log(
  `Removed ${removeFromDependencies.length} dependencies and ${removeFromDevDependencies.length} devDependencies`
)
