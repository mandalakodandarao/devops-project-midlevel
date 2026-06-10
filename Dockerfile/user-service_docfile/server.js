const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'David' }
    ]);
});

app.listen(3000, () => {
    console.log('User Service running on 3000');
});
