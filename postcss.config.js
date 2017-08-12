module.exports = ctx => ({
  parser: 'postcss-scss',
  plugins: {
    stylefmt: {},
    stylelint: {
      config: require('./stylelint.config.js'),
      failOnError: true
    },
    precss: {},
    'postcss-nested-props': {},
    'postcss-nested': {
      preserveEmpty: true
    },
    'postcss-utilities': {
      centerMethod: 'flexbox',
      textHideMethod: 'font'
    },
    'postcss-cssnext': {
      flexbox: true,
      browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
    },
    // cssnano: {},
    'postcss-reporter': { clearReportedMessages: true }
  }
});
