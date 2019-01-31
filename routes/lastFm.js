var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/:user', function(req, res, next) {
  let endpoint = "http://ws.audioscrobbler.com";
  let call = "/2.0/?method=user.getinfo&api_key=692e2776c2cb387f71714d34a75930a8&format=json"
  let info = endpoint + call + "&user=" + req.params.user
  request.get(info, function (error, response, body){
    if(!error & response.statusCode == 200){
      res.send(body)
    }
  })
});

module.exports = router;
