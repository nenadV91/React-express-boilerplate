const express = require('express')
const router = express.Router();

router.get('/email', (req, res) => {
  res.send('Emails page')
})


module.exports = router

