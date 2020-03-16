var express = require ('express');
var router = express.Router();
var userController = require ('../controller/user');

// setting router
router.get('/', userController.loginPage);

//on clicking login to retrieve the user info
router.get(userController.loginResult)

//exporting the router
module.exports = router;