/* eslint-disable */
const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://127.0.0.1:8081',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        }),
    )

    // app.use('/api', createProxyMiddleware({
    //     // 转发到5000端口
    //     target: 'http://127.0.0.1:8081',
    //     // 转发时重写路径
    //     pathRewrite: {'^/api' : ''},
    //     changeOrigin: true }));
}
