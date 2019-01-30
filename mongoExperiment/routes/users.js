
var express = require('express');
var router = express.Router();
let User = require('../model/userSchema');

/* GET users listing. */
router.get('/', function(req, res) {
  /* Send the html page from the current directory */
 res.sendFile(__dirname + "/page.html");
});

router.post('/testAdd', function(req,res) {
  /* add a new user get the name from the body of request */
  let user1 = new User({firstName : req.body.firstName, lastName : req.body.lastName});
  /* Save the content */
  user1.save((err, data) => {
    if(!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

router.delete('/delete', function(req,res) {
     /* User is the name given for schema in users.js 
        Find the name and delete */

    User.findOneAndDelete({firstName : req.body.firstName , lastName : req.body.lastName} , function(err,data) {
    if(!err) 
        res.json(data);
    else 
      res.json(err);
    })
})

router.get('/display',function(req,res) {
  /* Fetch all the content from the database */
  User.find({ }, function(err,doc) {
    if(err) 
      console.log("Error in display");
    else
      /* Render display.ejs file and all title has to be converted to doc in display.ejs */
      res.render('display', {title : doc});
  }
  
)
})
 
module.exports = router;
