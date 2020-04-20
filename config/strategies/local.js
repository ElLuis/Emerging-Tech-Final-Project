// Load the module dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Patient = require('mongoose').model('Patient');

// Create the Local strategy configuration method
module.exports = function() {
	// Use the Passport's Local strategy 
	passport.use(new LocalStrategy(function(username, password, done) {
		// Use the 'Patient' model 'findOne' method to find a patient with the current username
		Patient.findOne({
			username: username
		}, (err, patient) => {
			// If an error occurs continue to the next middleware
			if (err) {
				return done(err);
			}
			
			// If a patient was not found, continue to the next middleware with an error message
			if (!patient) {
				return done(null, false, {
					message: 'Unknown patient'
				});
			}

			// If the passport is incorrect, continue to the next middleware with an error message
			if (!patient.authenticate(password)) {
				return done(null, false, {
					message: 'Invalid password'
				});
			}
			
			// Otherwise, continue to the next middleware with the patient object
			return done(null, patient);
		});
	}));
};