module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    extends: [
      'plugin:vue/recommended',
      '@nuxtjs/eslint-config-typescript',
      'prettier/vue',
      'plugin:prettier/recommended'
    ],
    plugins: ['vue'],
    rules: {
      semi: [2, 'never'],
      'no-console': 'off',
      'vue/max-attributes-per-line': 'off',
      'prettier/prettier': ['error', {
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
        singleQuote: true
      }]
    }
};