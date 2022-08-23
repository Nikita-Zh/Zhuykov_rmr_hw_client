const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/v1',
        createProxyMiddleware({
            target: 'http://51.250.65.73',
            changeOrigin: true,
        })
    );
};
