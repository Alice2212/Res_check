// calling models 
var user = require('../../models/users/user');

exports.loginPage = (req, res) =>{
    res.render('users/login')
}