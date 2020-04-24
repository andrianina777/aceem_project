const express = require('express');
const sqlite3 = require('sqlite3');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const urlC = require('./config/url');
const db = require('./config/database');
const models = require('./models');
const appE = new express();
const routing = require('./router');

appE.use(cors({origin: urlC.clientUrl}));
appE.use(bodyParser.json({limit: '50mb'}));
appE.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
appE.use("/assets", express.static("./src/assets"));

routing.forEach(element => {
    appE.use(element.route, require(element.path));
});

db.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error: ' + err));

// db.sync({
//     force: false
// }, () => console.log("[*] DB Sync complete"));

appE.listen(urlC.PORT, console.log(`Server connected (port: ${urlC.PORT})`));
