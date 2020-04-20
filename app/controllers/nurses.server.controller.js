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