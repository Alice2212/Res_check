var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
 
    username: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

  
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
