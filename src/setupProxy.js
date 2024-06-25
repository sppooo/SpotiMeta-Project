const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/genius',
    createProxyMiddleware({
      target: 'https://api.genius.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/genius': '',
      },
    })
  );
};
