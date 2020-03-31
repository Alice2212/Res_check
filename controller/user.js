// calling models 
var User = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');

}


exports.loginResult = (req,res) => {
    user.find({name: user.username})
 .then((doc)=>{
    console.log(doc);
    res.json(doc);
 })
.catch((err)=>{
    console.log(err);
    res.flash ('User not found')
    res.render('/users')
});

}





    