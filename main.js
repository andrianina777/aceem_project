const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const exec = require("child_process").exec;

/*====================== SERVER =====================*/
const express = require('express');
const sqlite3 = require('sqlite3');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const urlC = require('./config/url');

const db = require('./config/database');
const appE = new express();

appE.use(cors({origin: urlC.clientUrl}));
appE.use(bodyParser.json({limit: '50mb'}));
appE.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
appE.use("/assets", express.static("./src/assets"));

/*====================== ROUTER =====================*/
appE.use("/", require('./router/home.js'));

/*====================== END ROUTER =====================*/
db.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error: ' + err));

appE.listen(urlC.PORT, console.log(`Server connected (port: ${urlC.PORT})`));

/*====================== ELECTRON =====================*/

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 700,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(`http://localhost:${urlC.PORT}`);
    // Open the DevTools.
    // win.webContents.openDevTools();

    // Hide menu bar :: Jo
    win.setMenuBarVisibility(false);

    // Emitted when the window is closed.
    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", createWindow);

app.allowRendererProcessReuse = true;

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});