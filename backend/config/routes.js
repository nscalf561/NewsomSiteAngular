var express 				= require('express'),
		router					= express.Router(),
		path 						= require('path'),
		app 						= express(),
		bodyParser  		= require('body-parser'),
		hbs							= require('hbs'),
		viewController	= require('../controllers/viewController');

// router.route('*')
// 	.get(viewController.test);


// Home route/landing page
router.route('/')
	.get(viewController.home);

/************
	ABOUT
	**********/

router.route('/aboutGavin')
	.get(viewController.aboutGavin);

router.route('/aboutJennifer')
	.get(viewController.aboutJennifer);

/**********
	LATEST
 *********/

// Latest page, it's a feed of news
router.route('/latest')
	.get(viewController.latest);

router.route('/latest/press-releases')
	.get(viewController.pressReleases);

/*************
	ISSUES
 *************/

router.route('/issues')
	.get(viewController.issues);

router.route('/issues/economy')
	.get(viewController.economy);

router.route('/issues/energy')
	.get(viewController.energy);

router.route('/issues/civil-rights')
	.get(viewController.civilRights);

router.route('/issues/schools')
	.get(viewController.schools);

router.route('/issues/drug-policy')
	.get(viewController.drugPolicy);

router.route('/issues/government')
	.get(viewController.government);

/**************
	GET INVOLVED
 *************/

router.route('/getInvolved')
	.get(viewController.getInvolved);

router.route('/getInvolved/endorseGavin')
	.get(viewController.endorseGavin);

router.route('/getInvolved/volunteer')
	.get(viewController.volunteer);

router.route('/getInvolved/register')
	.get(viewController.register);

// Privacy Policy
router.route('/privacy-policy')
	.get(viewController.privacyPolicy);


module.exports = router;