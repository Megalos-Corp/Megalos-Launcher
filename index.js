const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.whenReady().then(() => createWindow());

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Megalos Launcher",
        height: 600,
        width: 900,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(path.join(__dirname, "index.html"));
}
app.on("activate", () => {
    if (mainWindow == null) {
        createWindow();
    }
});

app.on("window-all-closed", () => {
    app.quit();
})