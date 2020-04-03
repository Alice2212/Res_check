// calling models 
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy

exports.loginPage = (req, res) =>{
    res.render('users/login');

}



// exports.loginResult = (req,res) => {
//     User.find({name: User.username})
//  .then((doc)=>{
//     console.log(doc);
//     res.json(doc);
//  })
// .catch((err)=>{
//     console.log(err);
//     res.flash ('User not found')
//     res.render('/users')
// });
// }

exports.loginResult = (req,res) =>{
    paassport.use(new LocalStrategy({
        usernameField: 'username',
    },
    function(username, done){
        User.find({name:username})
        .then(function(User){
            if(!User){
                return done(null, false, {message: 'user not found'});
            }else{
              res.render("index",{result: res.json(doc)})
            } 
        }).catch((err)=>{
            done(err, null);
            res.render('/users')
        });
    }
    ));
  }
      



    