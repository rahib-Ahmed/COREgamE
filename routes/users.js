var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./routes/response.json', (err, response) =>{
    if(err) {
      console.log(err)
    } else {
      res.send(response)
    }
  } 
  )
});

module.exports = router;
