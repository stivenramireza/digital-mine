module.exports = {
    extends: [
      '@nuxtjs/eslint-config-typescript'
    ],
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      '@nuxtjs',
      'plugin:nuxt/recommended',
      'plugin:prettier/recommended',
      'prettier',
      'prettier/vue',
      'plugin:vue/essential'
    ],
    plugins: ['prettier'],
    rules: {
      'nuxt/no-cjs-in-config': 'off',
      'no-console': 'warn'
    }
  }
  