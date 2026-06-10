const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/users',
    createProxyMiddleware({
        target: 'http://user-service:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
    })
);

app.use('/api/orders',
    createProxyMiddleware({
        target: 'http://order-service:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
    })
);

app.use('/api/payments',
    createProxyMiddleware({
        target: 'http://payment-service:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
    })
);

app.listen(3000, () => {
    console.log('API Gateway running');
});
