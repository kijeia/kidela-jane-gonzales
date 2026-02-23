import path from 'path'

const buildEslintCommand = (filenames) =>
  `yarn eslint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const prettierCommand = (filenames) =>
  `yarn prettier --write ${filenames.join(' ')}`

const lintStagedConfig = {
  '*.{ts,tsx}': [buildEslintCommand, prettierCommand],
  '**/*.{css,scss,md,html,json}': [prettierCommand]
}

export default lintStagedConfig
