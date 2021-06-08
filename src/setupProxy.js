/* eslint-disable */
const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

// setupProxy.js
module.exports = function (app) {
    app.use(
        proxy('/api', {
            // 这里故意写一个错误地址
            target: 'http://192.168.3.34:8081',
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
