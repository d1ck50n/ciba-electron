const { app, BrowserWindow } = require('electron');

// ✅ IMPORTANT: match StartupWMClass
app.setName("ciba-electron");

function createWindow() {
const win = new BrowserWindow({
width: 420,
height: 800,
resizable: true,
autoHideMenuBar: true,
title: "ciba-electron",
webPreferences: {
nodeIntegration: false
}
});

// Remove menu
win.setMenu(null);

// Center window
win.center();

// Dynamic word
const word = process.argv[2] || "hello";

const mobileUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1";

// Load URL
win.loadURL(`https://www.iciba.com/word?w=${word}`, {
userAgent: mobileUA
});

// Mobile-like scaling
win.webContents.on('did-finish-load', () => {
win.webContents.setZoomFactor(0.6);
});
}

app.whenReady().then(createWindow);

// Quit when all windows closed (Linux-friendly)
app.on('window-all-closed', () => {
app.quit();
});

