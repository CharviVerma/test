const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UrlInterval = require('./models/UrlInterval');
const UrlResponse = require('./models/UrlResponse');
const Users = require('./models/Users')
const startCronJob = require('./cron');
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

mongoose.connect('mongodb://localhost:27017/login-app-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/change-password', async (req, res) => {
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(plainTextPassword, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
})

app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/register', async (req, res) => {
	const { username, password: plainTextPassword } = req.body

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.listen(9999, () => {
	console.log('Server up at 9999')
})

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


async function makeRequest() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    console.log('response.status: ', response.status); // 👉️ 200
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();
app.use(allowCrossDomain);

const port = 3000;
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
// db.createCollection('users', function(err, collection) {});

app.post('/url-interval', async (req, res) => {
  try {
    const { url, timeInterval } = req.body;
    const urlInterval = new UrlInterval({ url, timeInterval });
    await urlInterval.save();
    startCronJob(urlInterval);
    res.status(201).json(urlInterval);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/url-responses', async (req, res) => {
  try {
    const urlResponses = await UrlResponse.find().sort({ createdAt: -1 }).limit(20);
    res.json(urlResponses);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/url-responses/all', async (req, res) => {
  try {
    const urlResponses = await UrlResponse.find();
    res.json(urlResponses);
  } catch (error) {
    console.error(error);
    res.sendStatus(200);
  }
});

app.get('/url-entries', async (req, res) => {
  try {
    const urlIntervals = await UrlInterval.find();
    res.json(urlIntervals);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

