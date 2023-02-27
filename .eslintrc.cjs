module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['standard', 'prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  },
  ignorePatterns: ['jest.config.js']
}
