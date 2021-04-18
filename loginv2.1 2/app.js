const express       = require('express');
const session       = require('express-session');
const hbs           = require('express-handlebars');
const mongoose      = require('mongoose');
const passport      = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt'); //allows hashes of passwords, the password will not be stored in plain text
const app           = express();
mongoose.connect('mongodb+srv://admin:Password!@cluster0.5udid.mongodb.net/gdamembers?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

const User = mongoose.model('User', userSchema);

//Middleware
//app.engine('hbs', hbs({ extname: '.hbs' }));
//app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "verygoodsecret", 
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    //Setup user model
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new localStrategy(function (username, password, done) {
    User.findOne({ username: username}, function(err, user) {
        if (err) { return done(err); }
        if(!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        bcrypt.compare(password, user.password, function (err, res) {
            if (err) return done(err);

            if(res === false) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    });
}));

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next();
	res.redirect('/');
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated())
    {
        return res.redirect('/register')
    }

    next()
}
//ROUTES
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register', { title: "Register"} );
});

// app.post('/register', checkNotAuthenticated, async (req, res) => {
//    res.render('register', { title: "Register"} );
// });

app.get('/', isLoggedIn, (req, res) => {
	res.render("index", { title: "Home" });
});

app.get('/login', isLoggedOut, (req, res) => {
    const response = {
        title: "Login",
        error: req.query.error
    }
	res.render('login', response);
});

app.get('/login', (req, res) => {
    res.render('login', { title: "Login"} );
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?error=true'
}));

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
//Setup our Admin user
app.post('/register', async (req, res) => {
	const exists = await User.exists({ username: req.body.username});

	if (exists) {
        console.log("EXISTS");
		res.redirect('/login');
		return;
	};

	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(req.body.password, salt, function (err, hash) {
			if (err) return next(err);
			
			const newUser = new User({
                email: req.body.email,
				username: req.body.username,
				password: hash
			});

			newUser.save();

			res.redirect('/login');
		});
	});
});


app.listen(4000, () => {
    console.log("Listening on port 4000");
});

//followed along with this tutorial https://www.youtube.com/watch?v=W5Tb1MIeg-I
//for registering funcitonality https://www.youtube.com/watch?v=b91XgdyX-SM 


