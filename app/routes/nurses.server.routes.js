// Load the module dependencies
const nurses = require("../controllers/nurses.server.controller");
const Nurse = require("mongoose").model("Nurse");

// Define the routes module' method
module.exports = function (app) {

    // Set up the 'signup' routes
    app.route("/nurse_dashboard").get(nurses.renderDashboard);
    app.route("/nurse_vitals").get(nurses.renderVitals).post(nurses.postVitals);
    app.route("/nurse_prev_vitals").get(nurses.renderPrevVitals);
    app.route("/nurse_tips").get(nurses.renderTips).post(nurses.sendTips);

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