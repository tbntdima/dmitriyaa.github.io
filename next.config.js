const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass(
  withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
      return config;
    },
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/my-first-post': { page: '/post', query: { id: 'my-first-post' } },
        '/my-second-post': { page: '/post', query: { id: 'my-second-post' } }
      };
    }
  })
);
