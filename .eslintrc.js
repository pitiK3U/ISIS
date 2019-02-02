module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  plugins: ['babel'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'babel/new-cap': 1,
    'babel/camelcase': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/quotes': [2, 'single'],
    'babel/semi': [2, 'never'],
    'babel/no-unused-expressions': 1,
    'babel/valid-typeof': 1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
