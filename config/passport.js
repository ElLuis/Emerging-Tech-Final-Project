// Load the module dependencies
const passport = require('passport');
const mongoose = require('mongoose');

// Define the Passport configuration method
module.exports = function() {
	// Load the 'Patient' model
	const Patient = mongoose.model('Patient');
	
	// Use Passport's 'serializeUser' method to serialize the patient id
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	// Use Passport's 'deserializeUser' method to load the user document
	passport.deserializeUser((id, done) => {
		Patient.findOne({
			_id: id
		}, '-password -salt', (err, user) => {
			done(err, user);
		});
	});

	// Load Passport's strategies configuration files
	require('./strategies/local.js')();
};