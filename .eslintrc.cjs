module.exports = {
  extends: ['airbnb-base-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    mocha: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'no-restricted-globals': 0,
    'consistent-return': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'global-require': 0,
    'no-await-in-loop': 0,
    'import/no-mutable-exports': 0,
    'no-empty': 0,
    'no-param-reassign': 0,
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    radix: ['error', 'as-needed'],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'function-paren-newline': ['error', 'consistent'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
  },
  ignorePatterns: ['server/services/toursServiceGenerated/*'],
};
