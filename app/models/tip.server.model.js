// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Patient = require('mongoose').model('Patient');
const Schema = mongoose.Schema;

// Define a new 'TipSchema'
const TipSchema = new Schema({
	patient: Patient,
    comment: String,
    created: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	}
});

// Configure the 'TipSchema' to use getters and virtuals when transforming to JSON
TipSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Tip' model out of the 'TipSchema'
mongoose.model('Tip', TipSchema);