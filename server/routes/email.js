const express = require('express')
const router = express.Router();


router.get('/client', (req, res) => {
  res.send('Clients page')
})


module.exports = router

