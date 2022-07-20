module.exports = {
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/': {
        target: 'http://127.0.0.1:4523/m1/1308917-0-default'
        // changeOrigin: true // 是否跨域
        /* pathRewrite: {
          '/api': '/static'
        } */
      }
    }
  }
}
