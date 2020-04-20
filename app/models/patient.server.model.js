// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'PatientSchema'
const PatientSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		// Validate the email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
	},
	dob: Date, //Date of birth must be less than 120 years ago
	gender: String,
	isNurse: { type: Boolean, default: false }, //If false, then it's a patient . Set to false ('patient') by defalut
	username: {
		type: String,
		// Set a unique 'username' index
		unique: true,
		// Validate 'username' value existance
		required: 'Username is required',
		// Trim the 'username' field
		trim: true
	},
	password: {
		type: String,
		// Validate the 'password' value length
		validate: [
			(password) => password && password.length > 6,
			'Password should be longer'
		]
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		// Validate 'provider' value existance
		required: 'Provider is required'
	},
	providerId: String,
	providerData: {},
	created: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	}
});

// Set the 'fullname' virtual property
PatientSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
	const splitName = fullName.split(' ');
	this.firstName = splitName[0] || '';
	this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
PatientSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);

	}
	next();
});

// Create an instance method for hashing a password
PatientSchema.methods.hashPassword = function (password) {
    //console.log(crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex'))
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');

};

// Create an instance method for authenticating user
PatientSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

// Find possible not used username
PatientSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	// Add a 'username' suffix
	const possibleUsername = username + (suffix || '');

	// Use the 'Patient' model 'findOne' method to find an available unique username
	this.findOne({
		username: possibleUsername
	}, (err, user) => {
		// If an error occurs call the callback with a null value, otherwise find find an available unique username
		if (!err) {
			// If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
			if (!user) {
				callback(possibleUsername);
			} else {
				return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

// Configure the 'PatientSchema' to use getters and virtuals when transforming to JSON
PatientSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Patient' model out of the 'PatientSchema'
mongoose.model('Patient', PatientSchema);