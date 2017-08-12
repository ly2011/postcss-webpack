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
    'postcss-nested': {},
    'postcss-cssnext': {
      flexbox: true,
      browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
    },
    'postcss-reporter': { clearReportedMessages: true }
  }
});
