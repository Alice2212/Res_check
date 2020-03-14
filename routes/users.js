var express = require ('express');
var router = express.Router();
var userController = require ('../controller/user');

// setting router
router.get('/', userController.loginPage);

//exporting the router
module.exports = router;