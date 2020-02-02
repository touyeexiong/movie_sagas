const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all movies and details
router.get('/', (req,res) => {
    const queryText = 'SELECT * FROM "movies";'
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
        
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
        
    })
    
})

module.exports = router;