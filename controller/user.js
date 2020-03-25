// calling models 
var User = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');
},

exports.loginResult = (req,res)=>{
   
    User.find({}).then(result=>{
        res.render("index",{ result:"kevin" });
    }).catch(error=>res.send(error.message));
       
    
}
    