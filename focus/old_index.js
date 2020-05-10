const {app, BrowserWindow} = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: "100%",
    height: "100%",
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('calibration.html')
}

app.whenReady().then(createWindow)

