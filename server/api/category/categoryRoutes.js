var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    console.log('Hey from category!!');
    res.send({ok: true});
  });

router.route('/err').get(function(req, res){
  console.log("error occurs");
});

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
