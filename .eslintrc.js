module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    test: true,
    browser: true,
    expect: true
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'no-new': 'off',
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false,
      'printWidth': 120
    }]
  }
}
