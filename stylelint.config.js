// 常用配置
module.exports = {
  extends: 'stylelint-config-standard',
  // 各rules的具体作用见上面链接
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'define-mixin',
          'mixin',
          'for',
          'if',
          'else',
          'define-extend',
          'extend'
        ]
      }
    ],
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always',
    'max-empty-lines': 2,
    // 允许的单位
    'unit-whitelist': ['em', 'rem', '%', 's', 'ms', 'px', 'vh', 'vw']
  }
};
