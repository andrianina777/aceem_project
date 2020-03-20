const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const exec = require("child_process").exec;

/*======================NODE=====================*/
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
appE.use("/", require('./router/home.js'));

console.log('/*----------------------------------------------------------*/');
db.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error: ' + err));

// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
// });
// db.sync({
//     force: false
// }, () => console.log("[*] DB Sync complete"));

appE.listen(urlC.PORT, console.log(`Server connected (port: ${urlC.PORT})`));

/*======================NODE=====================*/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1200,
        height: 700,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    
    win.loadURL(`http://localhost:${urlC.PORT}`);

    // Open the DevTools.
    // win.webContents.openDevTools();

    // Hide menu bar :: Jo
    win.setMenuBarVisibility(false);

    // Emitted when the window is closed.
    win.on("closed", () => {
        exec("TSKILL server", (error, stdout, stderr) => { // pour fermer la ligne de commande du serveur en arriere plan
            //do whatever here
        })
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.