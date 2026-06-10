const express = require('express');
const app = express();

app.get('/payments', (req, res) => {
    res.json([
        { paymentId: 5001, status: 'SUCCESS' }
    ]);
});

app.listen(3000, () => {
    console.log('Payment Service running');
});
