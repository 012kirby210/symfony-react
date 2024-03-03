module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: "module"
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "no-console": 0,
        "no-unused-vars": 0
    }
};