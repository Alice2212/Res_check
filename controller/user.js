// calling models 
var user = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');
}