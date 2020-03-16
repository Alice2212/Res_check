// calling models 
var user = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');
}

// to check if user exist and retrieve data
exports.loginResult = (req, res) => {
    user.findById(req.params.id, function (err,result){
        if(err){
            req.flash ('success', ' ${user.username} does not exist')
            res.redirect('/')
        }else{
            // code for returning the result
            res.json({
                message: "Your result is ",
                data: user

            })
        }
    })
}