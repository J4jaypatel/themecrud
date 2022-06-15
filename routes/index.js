var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'signup' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});


router.post('/signupprocess',function(req,res,next){
  var eml = req.session.eml = req.body.email;
  var pass = req.session.pass = req.body.psw;
  var cpass = req.session.cpass = req.body.cpass;
  if(eml && pass && cpass){
    if(pass === cpass){
      console.log("You are successfully SignedIn");
      res.redirect('/login');
    }
    else{
      console.log("Your email or password is incorrect");
    }
  }else{
    console.log("Your session is Empty");
  }


router.post('/loginprocess',function(req,res,next){
  var nm = req.session.eml;
  var lemail = req.body.lemail;
  var lpass = req.body.lpass;
  if(req.session.pass && req.session.eml){
    if(lemail === req.session.eml && lpass === req.session.pass){
      console.log("Welcome To Home Page:)");
      res.render('home',{username:nm});
    }
    else{
      console.log("Your Email-id or password does not Match");
    }
  }
    else{
      console.log("Your session data is expired or not stored");
  }
});


router.get('/logoutprocess', function(req, res, next) {
  req.session.destroy(function(err){
    res.redirect('/login');
  })
});

});

module.exports = router;
