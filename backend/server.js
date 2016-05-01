var express 		= require('express'),
		app 				= express(),
		bodyParser 	= require('body-parser'),
		cors 				= require('cors'),
		routes 			= require('./config/routes'),
		hbs 				= require('hbs'),
		morgan 			= require('morgan');

// Allows for cross origin resource sharing, this needs to be changed
// for deployment --- settings are not secure right now
app.use(cors());

// Configures boydParser (accepts form data)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//TODO DO WE NEED THIS?
// Serves static files from public folder
app.use(express.static(__dirname + '/public/views'));

// Sets view engine to hbs
app.set('view engine', 'hbs');

// This grabs the file we're making the routes from
app.use(routes);

//TODO: We'll reconfigure this outside of development
app.listen(3000, function() {
	console.log('server is up');
});