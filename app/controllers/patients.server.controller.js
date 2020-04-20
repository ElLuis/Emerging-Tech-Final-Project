// Load the module dependencies
const Patient = require('mongoose').model('Patient');
const passport = require('passport');

// Create a new error handling controller method
const getErrorMessage = function(err) {
	// Define the error message variable
	var message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};

exports.renderdashboard = function(req, res, next){
	if (!req.patient) {
		// Use the 'response' object to render the signin page
		res.render('patient_dashboard', {
			// Set the page title variable
			title: 'Dashboard',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
	} else {
		return res.redirect('/');
	}
}

exports.rendervideo = function(req, res, next){
	if (!req.patient) {
		// Use the 'response' object to render the signin page
		res.render('exercises', {
			// Set the page title variable
			title: 'Videos',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
	} else {
		return res.redirect('/');
	}
}

exports.rendersymptom = function(req, res, next){
	if (!req.patient) {
		// Use the 'response' object to render the signin page
		res.render('symptom', {
			// Set the page title variable
			title: 'Videos',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
	} else {
		return res.redirect('/');
	}
}

exports.renderesult = function(req, res, next){
	if (!req.patient) {

		var Bodyache = req.body.bodyache;
    var ba;
    if (Bodyache === '0') {

        console.log(Bodyache);
        ba = Number(Bodyache);
        console.log(ba);
    }
    else {
        console.log(Bodyache[1]);
        ba = Number(Bodyache[1]);
        console.log(ba);
    }

    var Chestpain = req.body.chestpain;
    var cp;
    if (Chestpain === '0') {

        console.log(Chestpain);
        cp = Number(Chestpain);
        console.log(cp);
    }
    else {
        console.log(Chestpain[1]);
        cp = Number(Chestpain[1]);
        console.log(cp);
    }

    var Coldsweat = req.body.coldsweat;
    var cs;
    if (Coldsweat === '0') {

        console.log(Coldsweat);
        cs = Number(Coldsweat);
        console.log(cs);
    }
    else {
        console.log(Coldsweat[1]);
        cs = Number(Coldsweat[1]);
        console.log(cs);
    }

    var Confusion = req.body.confusion;
    var cf;
    if (Confusion === '0') {

        console.log(Confusion);
        cf = Number(Confusion);
        console.log(cf);
    }
    else {
        console.log(Confusion[1]);
        cf = Number(Confusion[1]);
        console.log(cf);
    }

    var Cough = req.body.cough;
    var c;
    if (Cough === '0') {

        console.log(Cough);
        c = Number(Cough);
        console.log(c);
    }
    else {
        console.log(Cough[1]);
        c = Number(Cough[1]);
        console.log(c);
    }

    var Diarrhea = req.body.diarrhea;
    var d;
    if (Diarrhea === '0') {

        console.log(Diarrhea);
        d = Number(Diarrhea);
        console.log(d);
    }
    else {
        console.log(Diarrhea[1]);
        d = Number(Diarrhea[1]);
        console.log(d);
    }

    var Dizziness = req.body.dizziness;
    var dz;
    if (Dizziness === '0') {

        console.log(Dizziness);
        dz = Number(Dizziness);
        console.log(dz);
    }
    else {
        console.log(Dizziness[1]);
        dz = Number(Dizziness[1]);
        console.log(dz);
    }

    var Dryskin = req.body.dryskin;
    var ds;
    if (Dryskin === '0') {

        console.log(Dryskin);
        ds = Number(Dryskin);
        console.log(ds);
    }
    else {
        console.log(Dryskin[1]);
        ds = Number(Dryskin[1]);
        console.log(ds);
    }

    var Fatigue = req.body.fatigue;
    var f;
    if (Fatigue === '0') {

        console.log(Fatigue);
        f = Number(Fatigue);
        console.log(f);
    }
    else {
        console.log(Fatigue[1]);
        f = Number(Fatigue[1]);
        console.log(f);
    }

    var Fever = req.body.fever;
    var fv;
    if (Fever === '0') {

        console.log(Fever);
        fv = Number(Fever);
        console.log(fv);
    }
    else {
        console.log(Fever[1]);
        fv = Number(Fever[1]);
        console.log(fv);
    }

    var Headache = req.body.headache;
    var ha;
    if (Headache === '0') {

        console.log(Headache);
        ha = Number(Headache);
        console.log(ha);
    }
    else {
        console.log(Headache[1]);
        ha = Number(Headache[1]);
        console.log(ha);
    }

    var Indigestion = req.body.indigestion;
    var id;
    if (Indigestion === '0') {

        console.log(Indigestion);
        id = Number(Indigestion);
        console.log(id);
    }
    else {
        console.log(Indigestion[1]);
        id = Number(Indigestion[1]);
        console.log(id);
    }

    var Itching = req.body.itching;
    var it;
    if (Itching === '0') {

        console.log(Itching);
        it = Number(Itching);
        console.log(it);
    }
    else {
        console.log(Itching[1]);
        it = Number(Itching[1]);
        console.log(it);
    }

    var Nausea = req.body.nausea;
    var n;
    if (Nausea === '0') {

        console.log(Nausea);
        n = Number(Nausea);
        console.log(n);
    }
    else {
        console.log(Nausea[1]);
        n = Number(Nausea[1]);
        console.log(n);
    }

    var Numbness = req.body.numbness;
    var nm;
    if (Numbness === '0') {

        console.log(Numbness);
        nm = Number(Numbness);
        console.log(nm);
    }
    else {
        console.log(Numbness[1]);
        nm = Number(Numbness[1]);
        console.log(nm);
    }

    var Rash = req.body.rash;
    var r;
    if (Rash === '0') {

        console.log(Rash);
        r = Number(Rash);
        console.log(r);
    }
    else {
        console.log(Rash[1]);
        r = Number(Rash[1]);
        console.log(r);
    }

    var Runnynose = req.body.runnynose;
    var rn;
    if (Runnynose === '0') {

        console.log(Runnynose);
        rn = Number(Runnynose);
        console.log(rn);
    }
    else {
        console.log(Runnynose[1]);
        rn = Number(Runnynose[1]);
        console.log(rn);
    }

    var Shortofbreath = req.body.shortofbreath;
    var sb;
    if (Shortofbreath === '0') {

        console.log(Shortofbreath);
        sb = Number(Shortofbreath);
        console.log(sb);
    }
    else {
        console.log(Shortofbreath[1]);
        sb = Number(Shortofbreath[1]);
        console.log(sb);
    }

    var Sneezing = req.body.sneezing;
    var sz;
    if (Sneezing === '0') {

        console.log(Sneezing);
        sz = Number(Sneezing);
        console.log(sz);
    }
    else {
        console.log(Sneezing[1]);
        sz = Number(Sneezing[1]);
        console.log(sz);
    }

    var Sorethroat = req.body.sorethroat;
    var st;
    if (Sorethroat === '0') {

        console.log(Sorethroat);
        st = Number(Sorethroat);
        console.log(st);
    }
    else {
        console.log(Sorethroat[1]);
        st = Number(Sorethroat[1]);
        console.log(st);
    }

    var Swelling = req.body.swelling;
    var sw;
    if (Swelling === '0') {

        console.log(Swelling);
        sw = Number(Swelling);
        console.log(sw);
    }
    else {
        console.log(Swelling[1]);
        sw = Number(Swelling[1]);
        console.log(sw);
    }

    var Troubleseeing = req.body.troubleseeing;
    var ts;
    if (Troubleseeing === '0') {

        console.log(Troubleseeing);
        ts = Number(Troubleseeing);
        console.log(ts);
    }
    else {
        console.log(Troubleseeing[1]);
        ts = Number(Troubleseeing[1]);
        console.log(ts);
    }

    var Troublewalking = req.body.troublewalking;
    var tw;
    if (Troublewalking === '0') {

        console.log(Troublewalking);
        tw = Number(Troublewalking);
        console.log(tw);
    }
    else {
        console.log(Troublewalking[1]);
        tw = Number(Troublewalking[1]);
        console.log(tw);
    }

    const tf = require('@tensorflow/tfjs');
	const symptom = require('../models/symptoms.json');

    const symptomsTesting = [
        {
            "bodyache": ba, "chestpain": cp, "coldsweat": cs, "confusion": cf,
            "cough": c, "diarrhea": d, "dizziness": dz, "dryskin": ds,
            "fatigue": f, "fever": fv, "headache": ha, "indigestion": id,
            "itching": it, "nausea": n, "numbness": nm, "rash": r,
            "runnynose": rn, "shortofbreath": sb, "sneezing": sz, "sorethroat": st,
            "swelling": sw, "troubleseeing": ts, "troublewalking": tw
        }
    ];

    const trainingData = tf.tensor2d(symptom.map(item => [
        item.bodyache, item.chestpain, item.coldsweat, item.confusion,
        item.cough, item.diarrhea, item.dizziness, item.dryskin,
        item.fatigue, item.fever, item.headache, item.indigestion,
        item.itching, item.nausea, item.numbness, item.rash,
        item.runnynose, item.shortofbreath, item.sneezing, item.sorethroat,
        item.swelling, item.troubleseeing, item.troublewalking
    ]));

    const outputData = tf.tensor2d(symptom.map(item => [
        item.illness === "cold" ? 1 : 0,
        item.illness === "flu" ? 1 : 0,
        item.illness === "allergy" ? 1 : 0,
        item.illness === "stroke" ? 1 : 0,
        item.illness === "heartattack" ? 1 : 0
    ]));

    const testingData = tf.tensor2d(
        symptomsTesting.map(item => [item.bodyache, item.chestpain, item.coldsweat, item.confusion,
                                     item.cough, item.diarrhea, item.dizziness, item.dryskin,
                                     item.fatigue, item.fever, item.headache, item.indigestion,
                                     item.itching, item.nausea, item.numbness, item.rash,
                                     item.runnynose, item.shortofbreath, item.sneezing, item.sorethroat,
                                     item.swelling, item.troubleseeing, item.troublewalking])
    );

     const model = tf.sequential();

    model.add(tf.layers.dense({
        inputShape: [23],
        activation: "sigmoid",
        units: 24
    }));

    model.add(tf.layers.dense({
        inputShape: [24],
        activation: "sigmoid",
        units: 5
    }));

    model.add(tf.layers.dense({
        activation: "sigmoid",
        units: 5
    }));

    model.compile({
        loss: "meanSquaredError",
        optimizer: tf.train.adam(.06)
    });

     model.fit(trainingData, outputData, { epochs: 100 })
        .then((history) => {
            var result = model.predict(testingData);
            console.log(result);

            var index = tf.argMax(result, axis = 1).dataSync();
            console.log(index);
            var names = ['cold', 'flu', 'allergy', 'stroke', 'heart attack'];
            console.log(names[index]);

            res.render('results', { diagnosis: names[index] });
        });
	} else {
		return res.redirect('/');
	}
}

// Create a new controller method that renders the signin page
exports.renderSignin = function(req, res, next) {
	// If patient is not connected render the signin page, otherwise redirect the patient back to the main application page
	if (!req.patient) {
		// Use the 'response' object to render the signin page
		res.render('signin', {
			// Set the page title variable
			title: 'Sign-in Form',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
	} else {
		return res.redirect('/');
	}
};

// Create a new controller method that renders the signup page
exports.renderSignup = function(req, res, next) {
	// If patient is not connected render the signup page, otherwise redirect the patient back to the main application page
	if (!req.patient) {
		// Use the 'response' object to render the signup page
		res.render('signup', {
			// Set the page title variable
			title: 'Patient Registration Form',
			// read the message from flash variable
			badmessage: req.flash('error') //passes the error stored in flash
		});
	} else {
		return res.redirect('/');
	}
};

// Create a new controller method that creates new 'regular' patients
exports.signup = function(req, res, next) {
	// If patient is not connected, create and login a new patient, otherwise redirect the patient back to the main application page
	if (!req.patient) {
		// Create a new 'Patient' model instance
        const patient = new Patient(req.body);
        console.log(req.body)
		const message = null;

		// Set the patient provider property
		patient.provider = 'local';

		// Try saving the new patient document
		patient.save((err) => {
			// If an error occurs, use flash messages to report the error
			if (err) {
				// Use the error handling method to get the error message
				 message = getErrorMessage(err);
                console.log('Error: '+ err)
				// save the error in flash
				req.flash('error', message); //save the error into flash memory

				// Redirect the patient back to the signup page
				return res.redirect('/signup');
			}

			// If the patient was created successfully use the Passport 'login' method to login
			req.login(patient, (err) => {
				// If a login error occurs move to the next middleware
				if (err) return next(err);

				// Redirect the patient back to the main application page
				return res.redirect('/patient_dashboard'); //After successful registration, render Patient Dashboard
			});
		});
	} else {
		return res.redirect('/');
	}
};

// Create a new controller method that creates new 'OAuth' patients
exports.saveOAuthUserProfile = function(req, profile, done) {
	// Try finding a patient document that was registered using the current OAuth provider
	Patient.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, (err, patient) => {
		// If an error occurs continue to the next middleware
		if (err) {
			return done(err);
		} else {
			// If a patient could not be found, create a new patient, otherwise, continue to the next middleware
			if (!patient) {
				// Set a possible base username
				const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

				// Find a unique available username
				Patient.findUniqueUsername(possibleUsername, null, (availableUsername) => {
					// Set the available patient name 
					profile.username = availableUsername;
					
					// Create the patient
					patient = new Patient(profile);

					// Try saving the new patient document
					patient.save(function(err) {
						// Continue to the next middleware
						return done(err, patient);
					});
				});
			} else {
				// Continue to the next middleware
				return done(err, patient);
			}
		}
	});
};

// Create a new controller method for signing out
exports.signout = function(req, res) {
	// Use the Passport 'logout' method to logout
	req.logout();

	// Redirect the patient back to the main application page
	res.redirect('/');
};

exports.renderalert = function(req, res){
    // Use the 'response' object to render the alert page
    res.render('patientalert', {
        // Set the page title variable
        title: 'Send Alerts to Patients',
        // Set the flash message variable
        messages: req.flash('error') || req.flash('info')
    });
};


exports.rendertips = function(req, res){
    // Use the 'response' object to render the alert page
    res.render('patienttips', {
        // Set the page title variable
        title: 'View tips',
        // Set the flash message variable
        messages: req.flash('error') || req.flash('info')
    });
};

exports.create = function (req, res) {
    const tipsandalert = new Tipsandalert();
    tipsandalert.alert = req.body.alert;
    //article.creator = req.body.username;
    console.log(req.body)
    res.render('nursealert',{
        title: 'Send Alerts to Patients',
        // Set the flash message variable
        messages: req.flash('error') || req.flash('info')

    })
    //
    //
};