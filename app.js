// npm requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// cors middleware
app.use(cors());

// bodyParser middleware
app.use(bodyParser.json());

const PORT = 8080;

//set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(PORT, () => {
console.log('Your app is listening on port', PORT);
});