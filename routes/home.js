const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'www', 'index.html'));
    });


//router.get('/getCrypto', );
//router.post('/addCrypto', );
module.exports = router;
