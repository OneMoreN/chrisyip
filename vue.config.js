// vue.config.js
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/'], ['/contact-me'],
          {
            // options
          }
        )
      ]
    }
  }
}

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Christopher Yip Portfolio'
        return args
      })
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
  }
}
