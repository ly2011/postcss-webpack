const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isPro = process.env.NODE_ENV === 'production';

function resolve(dir = '.') {
  return path.join(__dirname, '..', dir);
}

const rootPath = resolve('.');
const srcPath = resolve('src');
const faviconPath = resolve('src/assets/favicon.ico');
const buildPath = resolve('dist');
const nodeModulesPath = resolve('node_modules');
const eslintConfigPath = `${rootPath}.eslintrc.js`;

module.exports = {
  context: rootPath,
  output: {
    // 无论 path 是什么, dev 环境的 `index.html` 所引用的 js 路径都是 文件名而已(即与 path 完全无关. 只与
    // filename 字段有关而已)
    path: buildPath,
    publicPath: '/',
    filename: 'js/[name]__[hash:16].bundle.js',
    chunkFilename: 'js/[name]__[hash:16].bundle.js'
  },
  resolve: {
    modules: ['node_modules', nodeModulesPath, srcPath],
    enforceExtension: false,
    enforceModuleExtension: false,
    extensions: [
      '.js',
      '.vue',
      '.jsx',
      '.scss',
      '.css',
      '.jpg',
      '.png',
      '.gif',
      '.svg',
      '.webpack.js',
      '.web.js',
      '.ts',
      '.tsx'
    ],
    alias: {
      '~root': rootPath
    }
  },
  resolveLoader: {
    modules: ['node_modules', nodeModulesPath]
    // moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: [nodeModulesPath],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        include: [srcPath],
        exclude: nodeModulesPath,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: 'images/[name]-[hash].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [srcPath, nodeModulesPath],
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 作用域提升，减少代码量，加快代码运行速度（webpack 3.0）
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      eslint: {
        configFile: eslintConfigPath,
        formatter: require('eslint-friendly-formatter')
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true
    })
  ]
};
