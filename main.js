const fs = require("fs");
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      backgroundThrottling: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./build/index.html")}`
  );

  isDev || Menu.setApplicationMenu(Menu.buildFromTemplate([{}]));

  const data = fs.readFileSync("data.json", "utf-8");

  mainWindow.webContents.on("did-finish-load", (e) => {
    mainWindow.webContents.send("data:read", data);
  });
});

ipcMain.on("data:update", (e, data) => {
  fs.writeFile("data.json", data, (err) => {
    if (err) return console.log(err);
  });
});
