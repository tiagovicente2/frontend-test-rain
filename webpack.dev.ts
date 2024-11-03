import 'webpack-dev-server'

import { Configuration } from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'

import common from './webpack.common'

const config: Configuration = merge<Configuration>(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 3001,
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    historyApiFallback: true
  },
  optimization: {
    minimize: false
  }
})

export default config
