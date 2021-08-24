module.exports = {
    devServer: {
        proxy: {
            '/list/product': {
                'target': 'http://localhost:3000',
                'changeOrigin': true,
                'pathRewrite': {
                    '^/list/product': '/list/product'
                }
            }
        }
    }
}