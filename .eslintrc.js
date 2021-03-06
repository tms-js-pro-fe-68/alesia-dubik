module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'jest'
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading' : 0,
  },
};
