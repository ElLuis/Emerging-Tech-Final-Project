// Load the module dependencies
const nurses = require("../controllers/nurses.server.controller");
const Nurse = require("mongoose").model("Nurse");

// Define the routes module' method
module.exports = function (app) {

    app
    .route("/signin_nurse")
    .get(nurses.renderSignin)
    .post(function (req, res) {

        const username = req.body.username;
        const password = req.body.password;
  
      Nurse.findOne({username:username}, function(e, o) {
        if (o){
          console.log('Found: '+o);
          if(o.password == password)
          res.redirect('/nurse_dashboard')
          else
          callback(null);
        }
      });

})
};