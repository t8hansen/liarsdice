module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  "plugins": [
    // ...
    "baseui",
  ],
  "rules": {
    // ...
    'linebreak-style': 0,
    'no-unused-vars': 'warn',
    'eol-last': 'warn',
    'semi': 'warn',
    'quotes': 'warn',
    'indent': 'warn',
    'object-curly-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'comma-dangle': 'warn',
    'react/prop-types': 'warn',
    'no-trailing-spaces': 'warn',
    'arrow-parens': 'warn',
    'baseui/deprecated-theme-api': 'warn',
    'baseui/deprecated-component-api': 'warn',
    'baseui/no-deep-imports': 'warn',
  }
};
