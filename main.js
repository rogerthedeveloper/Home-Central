const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 900, 
    height: 700,
    show: false,
    resizable: false,
    backgroundColor: '#FFF',
    icon: `file://${__dirname}/dist/HomeCentral/assets/logo.png`
  })

  //win.loadURL(`file://${__dirname}/dist/HomeCentral/index.html`)

  win.loadURL("http://localhost:4200/")

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    app.quit()
  })

  win.once('ready-to-show', () => {
    win.show()
    //win.setFullScreen(true)
  })

}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})