// calling models 
var user = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');
}



exports.loginResult = (req,res)=>{
    user.findUserByUsername(username, function(user,result){
        if(!user){
            res.flash('User not Found')
            res.redirect('/')
        }
        res.json({
            data : result
        })

    })
}
    