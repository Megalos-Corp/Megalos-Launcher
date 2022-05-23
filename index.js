const { app, BrowserWindow, ipcMain } = require("electron");
const { Authenticator } = require("minecraft-launcher-core");
const path = require("path");

app.whenReady().then(() => createWindow());

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Megalos Launcher | Prototype 0.0.1a",
        height: 650,
        width: 1000,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate",function () {
        if (process.plateform !== "darwin") app.quit();
    });
  ipcMain.on("login", (evt, data) => {
      Authenticator.getAuth(data.user, data.pass)
      .then((e) => {
          mainWindow.loadURL(path.join(__dirname, "app.html"));
      })
      .catch(() => {
          evt.sender.send("err", "Erreur de connexion");
      });
  })  
})
