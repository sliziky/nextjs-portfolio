module.exports = {
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              options: { mode: ['react-component'] }
          }
      )
      return cfg;
  }
}
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({/* my next config */})
