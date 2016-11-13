import path from 'path';

import px2rem from 'postcss-px2rem'
import webpack from 'webpack'
import merge from 'webpack-merge'
import autoprefixer from 'autoprefixer'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const inDevMode = process.env.NODE_ENV === 'development'
const inProdMode = !inDevMode
const componentName = 'Block'

const commonConfig = {
  progress: true,
  debug: true,
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, '/lib'),
    filename: componentName + '.js',
    library: 'react-block',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader-once'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          'plugins': [
            'add-module-exports',
            'transform-es2015-modules-commonjs',
            'transform-class-properties',
          ],
          presets: [
            'es2015',
            'react'
          ]

        }
      }
    ]
  },
  postcss: function () {
    return [
      px2rem({remUnit: 16}),
      autoprefixer
    ]
  },
  plugins: []
}

const devConfig = merge(commonConfig, {
  output: {
    filename: componentName + '.js'
  },
  plugins: [
    new CleanWebpackPlugin(['lib'])
  ]
})

const prodConfig = merge(commonConfig, {
  output: {
    filename: componentName + '.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
})

if (inDevMode) {
  module.exports = devConfig
}

if (inProdMode) {
  module.exports = prodConfig
}
