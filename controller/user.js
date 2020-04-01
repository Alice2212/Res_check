// calling models 
var User = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');

}



exports.loginResult = (req,res) => {
    User.find({name: User.username})
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





    