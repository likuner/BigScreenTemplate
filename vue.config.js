const webpack = require('webpack')

module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].externalJs = [`${process.env.VUE_APP_BASE_URL}/CityGis.Bridge.js`]
        args[0].buildDatetime = new Date().toString()
        return args
      })
  },
  devServer: {
    // proxy: {
    //   '/': {
    //     target: 'https://',
    //     changeOrigin: true,
    //     ws: true
    //   }
    // }
  }
}
