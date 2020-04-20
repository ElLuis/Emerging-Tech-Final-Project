// Load the module dependencies
const patients = require("../../app/controllers/patients.server.controller");
const passport = require("passport");

// Define the routes module' method
module.exports = function (app) {
  // Set up the 'signup' routes
  app.route("/signup").get(patients.renderSignup).post(patients.signup);
  app.route("/patient_dashboard").get(patients.renderdashboard);
  app.route("/video").get(patients.rendervideo);
  app.route("/symptom").get(patients.rendersymptom);
  app.route("/result").post(patients.renderesult);
  app.route("/patientalert").get(patients.renderalert).post(patients.create);
  app.route("/patienttips").get(patients.rendertips)

  // Set up the 'signin' routes
  app
    .route("/signin")
    .get(patients.renderSignin)
    .post(passport.authenticate("local", {
      successRedirect: "/patient_dashboard",
      failureRedirect: "/signin",
      failureFlash: true,
    }));

  // Set up the 'signout' route
  app.get("/signout", patients.signout);
};

