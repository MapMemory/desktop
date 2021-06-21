import Electron from './electron.js';

export default class {
    network_error(error) {
        if (error !== 'Network Error')
            return;

        this.electron.createError('Отсутствует подлючение к серверу', 'Проверьте свое интернет соединение');

        const remote = window.require('electron').remote;
        let w = remote.getCurrentWindow();
        w.close();
    }
}