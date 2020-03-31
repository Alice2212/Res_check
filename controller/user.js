// calling models 
var user = require('../models/user');

exports.loginPage = (req, res) =>{
    res.render('users/login');
}



// exports.loginResult = (req,res)=>{
//     user.findUserByUsername(username, function(user,result){
//         if(!user){
//             res.flash('User not Found')
//             res.redirect('/')
//         }
//         res.json({
//             data : result
//         })

//     })
// }

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



    