// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const NurseSchema = new Schema({
  username: String,
  password: String
});

// Create an instance method for hashing a password
NurseSchema.methods.hashPassword = function (password) {
    //console.log(crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex'))
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');

};

// Create an instance method for authenticating user
NurseSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

// Configure the 'NurseSchema' to use getters and virtuals when transforming to JSON
NurseSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Nurse' model out of the 'NurseSchema'
mongoose.model('Nurse', NurseSchema);

const Nurse = require('mongoose').model('Nurse');

const nurse1 = new Nurse({username:'nurse1', password:'password'});
const nurse2 = new Nurse({username:'nurse2', password:'password'});
const nurse3 = new Nurse({username:'nurse3', password:'password'});

nurse1.save();
nurse2.save();
nurse3.save();