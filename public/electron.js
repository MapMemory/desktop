// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')
const axios = require('axios').default
const isDev = require('electron-is-dev')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600,
    backgroundColor: '#313131',
    minHeight: 600,
    minWidth: 300,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    },
    fullscreen: false,
    autoHideMenuBar: true
  })
  // mainWindow.setMenu(null);

  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  globalShortcut.register('Alt+A', () => {
    if (mainWindow.webContents.getURL() != (isDev ? 'http://localhost:3000/#/admin' : `file://${path.join(__dirname, '../build/index.html#/admin')}`))
      mainWindow.loadURL(isDev ? 'http://localhost:3000/#/admin' : `file://${path.join(__dirname, '../build/index.html#/admin')}`);
  })

  globalShortcut.register('F11', () => {
    if (!mainWindow.isFullScreen())
      mainWindow.setFullScreen(true);
    else
      mainWindow.setFullScreen(false);
  })

  globalShortcut.register('F10', () => {
    if (!mainWindow.isMaximized())
      mainWindow.maximize()
    else
      mainWindow.unmaximize()
  })

  globalShortcut.register('F9', () => {
    mainWindow.minimize()
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

async function isVersionLast(localVersion) {
  try {
    let versionOnServer = await new Promise((resolve, reject) => {
      axios.get('http://localhost:80/root/version.php').then((result) => {
        resolve(result.data);
      }).catch((e) => {
        reject(e);
      })
    })

    if (versionOnServer > localVersion) {
      const { dialog } = require('electron');
      dialog.showErrorBox('Обновитесь!', 'Вышла новая версия')
      return false;
    }

    return true;
  }
  catch (error) {
    if (error.toJSON().message !== 'Network Error' && error.toJSON().code !== 'ECONNREFUSED')
      return false;

    const { dialog } = require('electron');
    dialog.showErrorBox('Отсутствует подлючение к серверу', 'Проверьте свое интернет соединение');
    return false;
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  if (await isVersionLast('0.0.1'))
    createWindow();
  else
    app.quit()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.