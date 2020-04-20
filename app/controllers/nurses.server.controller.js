//Load the module dependencies
const Nurse = require('mongoose').model('Nurse');
const Patient = require('mongoose').model('Patient');
const Vital = require('mongoose').model('Vital');
const Tip = require('mongoose').model('Tip');
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
	var patientId = req.session.patientId;

	var getVitals = Vital.find({}).select({"_id":0,"created":1,"bodyTemperature":1,"heartRate":1,"bloodPressure":1,"respitoryRate":1}).where({"patientId":patientId});

	getVitals.exec(function (err, vitals) {
		if (err) {
			console.log(err);
		return next(err);
		};
		console.log(vitals);

		// Use the 'response' object to render the prev vitals page
		res.render('nurse_prev_vitals', {
			// Set the page title variable
			title: 'Previous Vitals',
			// Send list of vitals
			vitals: vitals,
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
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

//Post tips
	exports.sendTips = function (req,res)
	{
		const tip = new Tip(req.body);

		// Try saving the new vital document
	tip.save((err) => {
		
		if(err) {
			// Use the error handling method to get the error message
			message = getErrorMessage(err);
			console.log('Error: '+ err)
			// save the error in flash
			req.flash('error', message); //save the error into flash memory
		}
		
		else {
			console.log('New tip sent to: '+tip.patientId);
			// If the tip was created successfully display success tips submitted page
			return res.redirect('/nurse_dashboard'); //After successful registration, render Nurse Dashboard
		}
	});


	}

exports.postVitals = function(req, res, next){
	const vital = new Vital(req.body);
	console.log(vital);
	const message = null;

/* 	// Set the vital provider property
	vital.provider = 'local'; */
	req.session.patientId = req.body.patientId;
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
			req.session.patientId = vital.patientId; //Save session object
			// If the vital was created successfully display success vitals submitted page
			return res.redirect('/nurse_tips'); //After successful registration, render Nurse Dashboard
		}
	});
}