const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const port = 8080;

const db = require("./models/database/db");

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // TODO
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Credentials', true);
	next()
})

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "/src")));

/* require("./models/database/handlers/link.handler").addLink("https://google.com").then(function(res) {console.log(res);});
 */
require("./routes/index.js")(app)

app.listen(port);

console.log('site link http://localhost:' + port)

const sex = 211244422