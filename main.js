const electron = require("electron");

var electronWindow = undefined;

electron.app.on("ready", function(){
    electronWindow = new electron.BrowserWindow({
        width: 1080,
        height: 720,
        title: "Plex App",
        webPreferences:{
            nodeIntegration: false,
            webgl: true,
            webaudio: true
        },
        autoHideMenuBar: true,
        icon: __dirname + "/plex-icon.png"
    });

    electronWindow.loadURL("file://" + __dirname + "/main.html");

    electronWindow.on('closed', function(){
        electronWindow = undefined;
    });
});


electron.app.on("window-all-closed", function(){
    electron.app.quit();
});