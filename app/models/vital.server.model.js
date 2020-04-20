// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'VitalSchema'
const VitalSchema = new Schema({
	patient: String,
    bodyTemperature: String,
    heartRate: String,
    bloodPressure: String, 
    respitoryRate: String, 
    created: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	}
});

// Configure the 'VitalSchema' to use getters and virtuals when transforming to JSON
VitalSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Vital' model out of the 'VitalSchema'
mongoose.model('Vital', VitalSchema);