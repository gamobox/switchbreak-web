// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: 'eslint-config-prettier',
  // required to lint *.vue files
  plugins: [
    'prettier',
    'html',
  ],
  "globals": {
    "gapi": true,
    "axios": true
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    "prettier/prettier": [
      2,
      {
        "trailingComma": "none",
        "singleQuote": true,
        "semi": false,
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
