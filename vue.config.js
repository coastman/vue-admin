const devServerPort = 9527

module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/dev': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          '^/dev': ''
        }
      }
    }
  }
}
