import axios from 'axios';
import CONSTANTS from '../utils/constants.jsx';
import StateMessages from '../utils/stateMessages.js';

export default class {
    createWindowMailto(mailto, subject, body) {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowGitHub = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 400,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            show: false,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowGitHub.setMenu(null);

        windowGitHub.loadURL(`mailto:${mailto}?subject=${subject}&body=${body}`);

        globalShortcut.register('F11', () => {
            if (!windowGitHub.isFullScreen())
                windowGitHub.setFullScreen(true);
            else
                windowGitHub.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowGitHub.isMaximized())
                windowGitHub.maximize()
            else
                windowGitHub.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowGitHub.minimize()
        })
    };

    createWindowGitHub() {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowGitHub = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 400,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowGitHub.setMenu(null);

        windowGitHub.loadURL('https://github.com/MapMemory')

        globalShortcut.register('F11', () => {
            if (!windowGitHub.isFullScreen())
                windowGitHub.setFullScreen(true);
            else
                windowGitHub.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowGitHub.isMaximized())
                windowGitHub.maximize()
            else
                windowGitHub.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowGitHub.minimize()
        })
    };

    createWindowTwitter() {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowTwitter = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 500,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowTwitter.setMenu(null);

        windowTwitter.loadURL('https://twitter.com/MapMemoryLink')

        globalShortcut.register('F11', () => {
            if (!windowTwitter.isFullScreen())
                windowTwitter.setFullScreen(true);
            else
                windowTwitter.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowTwitter.isMaximized())
                windowTwitter.maximize()
            else
                windowTwitter.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowTwitter.minimize()
        })
    };

    createWindowDownloadAndroid() {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowDownloadAndroid = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 400,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowDownloadAndroid.setMenu(null);

        windowDownloadAndroid.loadURL('https://github.com/MapMemory/android')

        globalShortcut.register('F11', () => {
            if (!windowDownloadAndroid.isFullScreen())
                windowDownloadAndroid.setFullScreen(true);
            else
                windowDownloadAndroid.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowDownloadAndroid.isMaximized())
                windowDownloadAndroid.maximize()
            else
                windowDownloadAndroid.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowDownloadAndroid.minimize()
        })
    };

    createWindowDownloadIOS() {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowDownloadIOS = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 400,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowDownloadIOS.setMenu(null);

        windowDownloadIOS.loadURL('https://github.com/MapMemory/ios')

        globalShortcut.register('F11', () => {
            if (!windowDownloadIOS.isFullScreen())
                windowDownloadIOS.setFullScreen(true);
            else
                windowDownloadIOS.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowDownloadIOS.isMaximized())
                windowDownloadIOS.maximize()
            else
                windowDownloadIOS.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowDownloadIOS.minimize()
        })
    };

    createWindowDownloadDesktop() {
        const electron = window.require('electron');
        const path = window.require('path')
        const remote = electron.remote
        const { BrowserWindow, globalShortcut } = remote

        const windowDownloadDesktop = new BrowserWindow({
            center: true,
            width: 800,
            height: 600,
            backgroundColor: '#313131',
            minHeight: 400,
            minWidth: 400,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false
            },
            fullscreen: false,
            autoHideMenuBar: true,
            parent: remote.getCurrentWindow(),
            modal: true,
            icon: path.join(__dirname, '../public/icon.png')
        });

        windowDownloadDesktop.setMenu(null);

        windowDownloadDesktop.loadURL('https://github.com/MapMemory/desktop')

        globalShortcut.register('F11', () => {
            if (!windowDownloadDesktop.isFullScreen())
                windowDownloadDesktop.setFullScreen(true);
            else
                windowDownloadDesktop.setFullScreen(false);
        })

        globalShortcut.register('F10', () => {
            if (!windowDownloadDesktop.isMaximized())
                windowDownloadDesktop.maximize()
            else
                windowDownloadDesktop.unmaximize()
        })

        globalShortcut.register('F9', () => {
            windowDownloadDesktop.minimize()
        })
    };

    createError(title, content) {
        const electron = window.require('electron');
        const remote = electron.remote
        const { dialog } = remote
        dialog.showErrorBox(title, content)
    }

    createFilePath() {
        const electron = window.require('electron');
        const remote = electron.remote
        const { dialog } = remote
        dialog.showSaveDialog(null)
    }
}