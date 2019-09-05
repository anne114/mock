module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['vue', 'html'],
  // 对vue文件取消了缩进检查
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  rules: {
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    semi: 0,
    // allow debugger during development
    // 'no-irregular-whitespace': [
    //   'error',
    //   {
    //     skipComments: true,
    //     skipTemplates: true
    //   }
    // ],
    'no-unused-vars': ['warn']
  }
};
