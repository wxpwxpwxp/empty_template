module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    '**/iconfont.js',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eqeqeq': 'error',
    'default-case': 'error',
    'array-bracket-spacing': 'warn',
    'camelcase': 'warn',
    'comma-spacing': 'warn',
    'key-spacing': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': 'warn',
    'prefer-const': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'warn',
    'space-infix-ops': 'warn',
    'no-multi-spaces': 'warn',
    'space-before-blocks': 'warn',
    'semi-spacing': ['error', { before: false, after: true }],
    'no-undef': 'error',
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    '@typescript-eslint/no-explicit-any': 'off'
  },
};
