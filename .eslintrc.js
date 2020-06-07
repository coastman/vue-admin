module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭不让声明 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭自动推断类型后，不能声明类型
    '@typescript-eslint/no-inferrable-types': 'off'
  }
}
