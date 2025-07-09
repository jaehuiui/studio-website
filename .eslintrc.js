require('@jaehuiui/eslint-config/patch')

const path = require('path')
const tsconfig = path.join(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: ['@jaehuiui/eslint-config/react'],
  rules: {
    '@typescript-eslint/member-ordering': 'off',
  },
  parserOptions: {
    project: tsconfig,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: tsconfig
      },
    },
  },
  ignorePatterns: ['*.js', '*.cjs', '*.mjs', '*.mts'],
}