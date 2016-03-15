/*
	ROUTE.JS 
		Responsible for the routing of our app. 
		(The sequence of how we get from page to page)
*/

//load our user and group models
var User = require('./models/user');
var Group = require('./models/group');

//-- UNSURE HOW TO USE GOOGLE CALENDER MODULE AT THE MOMENT
var gcal = require('google-calendar');

module.exports = function(app, passport){
//HOME PAGE 
	
	app.get('/', function(req,res){
		res.render("index.ejs"); 
	});

//PROFILE PAGE
	
	app.get('/profile',isLoggedIn,function(req,res){ 
		res.render('profile.ejs',{user: req.user}); 
	});
	
	//When the user clicks button to create form
	app.post('/profile',function(req,res){ 
		//Get form data
		var user = req.user;
		var groupName = req.body.groupName;	
		var userEmail = user.google.email; 
		//Create a new group
		var newGroup = new Group(); 
		newGroup.name = groupName;
		newGroup.members.push(userEmail);
		newGroup.members.push("extraEmail@gmail.com"); 
		
		//save the Group
		newGroup.save(function(err){
        if(err){
            console.log(err);
        } else {
        	//once group is saved add the group to the users list of groups. 
            user.google.groups.push(groupName);
            user.save();
            //go to the groupProfile page. (use group's id in url)
            res.redirect('/groupProfile/'+newGroup.id);
        }
    	});
	});

	// GROUP PROFILE PAGE 
		app.get('/groupProfile/:groupID',function(req,res){ 
		// get the group ID from the url parameter
		var groupID = req.params.groupID; 
		// using the groupID find the corresponding group in our database
			// so that we can use that information on the page ect.
		Group.findById(groupID, function(err,group){
			// load our groupProfile template using the group found in query. 
			res.render('groupProfile.ejs',{group: group});
		});
	});
		// get and use information when user creates a new meeting request
		app.post('/groupProfile',function(req,res){ 
		// TODO: MARK
		console.log("Find a meeting between: "+req.body.dateMin);
		console.log("at: "+ req.body.timeMin);
		console.log("and: " + req.body.dateMax);
		console.log("at: " + req.body.timeMax);
	});
//LOGOUT
	// when the user clicks the logout button: 
		// logout session and send them back to hoome page.
	app.get('/logout',function(req, res){
		req.logout(); 
		res.redirect('/');

	});



	// =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    // also ask permission to use google calendar API.
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar'] }));
    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));
}; 
//Check to make sure the user is logged in before moving on to next step.
function isLoggedIn(req,res,next){ 
	if(req.isAuthenticated())
		return next(); 
	res.redirect('/login');
}







