//Load the module dependencies
const Nurse = require('mongoose').model('Nurse');
const Patient = require('mongoose').model('Patient');
const Vital = require('mongoose').model('Vital');
const passport = require('passport');


// Create a new 'render' controller method
exports.render = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
	res.render('index', {
		title: 'Home Page',
	});
};

// Create a new 'render' controller method
exports.renderSignin = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
	res.render('signin_nurse', {
		title: 'Nurse Page',
	});
};

exports.renderDashboard = function(req, res, next){
	if (!req.nurse) {
		// Use the 'response' object to render the signin page
		//Get all patients
		var getPatients = Patient.find({}).select({"_id":0,"username":1,"firstName":1,"lastName":1});
		getPatients.exec(function (err, patients) {
			if (err) {
				console.log(err);
			return next(err);
			};

			console.log(patients);
		    res.render('nurse_dashboard', {
			// Set the page title variable
			title: 'Dashboard',
			//Send list of patients
			patients: patients,
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
		});

	} else {
		return res.redirect('/');
	}
}

exports.renderVitals = function(req, res, next){
	// Use the 'response' object to render the vitals page
	res.render('nurse_vitals', {
		// Set the page title variable
		title: 'Vitals',
		// Set the flash message variable
		messages: req.flash('error') || req.flash('info')
	});
}

exports.renderPrevVitals = function(req, res, next){
	// Use the 'response' object to render the prev vitals page
	res.render('nurse_prev_vitals', {
		// Set the page title variable
		title: 'Previous Vitals',
		// Set the flash message variable
		messages: req.flash('error') || req.flash('info')
	});
}

exports.renderTips = function(req, res, next){
		// Use the 'response' object to render the tips page
		res.render('nurse_tips', {
			// Set the page title variable
			title: 'Send Tips to Patients',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
}

exports.postVitals = function(req, res, next){
	const vital = new Vital(req.body);
	console.log(req.body);
	const message = null;

	// Set the vital provider property
	vital.provider = 'local';

	// Try saving the new vital document
	vital.save((err) => {
		
		if(err) {
			// Use the error handling method to get the error message
			message = getErrorMessage(err);
			console.log('Error: '+ err)
			// save the error in flash
			req.flash('error', message); //save the error into flash memory
		}
		
		else {
			// If the vital was created successfully display success vitals submitted page
			Window.alert("Successfully submitted Vitals!");
			return res.redirect('/nurse_dashboard'); //After successful registration, render Nurse Dashboard
		}
	})
}