const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
          sourceMaps: true
        }
      }
    ]
  })

  config.resolve.extensions.push('.js', '.jsx')

  config.resolve.alias = {
    I18n: path.resolve(__dirname, '../i18n/build')
  }

  return config
}
