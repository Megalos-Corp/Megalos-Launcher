const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.whenReady().then(() => createWindow());

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Megalos Launcher | 0.0.1a",
        height: 650,
        width: 1000,
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