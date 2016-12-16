var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    console.log('Hey from post!!');
    res.send({ok: true});
  });
  .post(function(req, res){
     var user=req.body;
     users.push(user);
    res.json(user);
  })



module.exports = router;
