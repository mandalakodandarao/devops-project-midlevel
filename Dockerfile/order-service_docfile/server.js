const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
    res.json([
        { orderId: 1001, item: 'Laptop' }
    ]);
});

app.listen(3000, () => {
    console.log('Order Service running');
});
