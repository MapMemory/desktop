export default class {
    network_error(error) {
        if (error !== 'Network Error')
            return;

        const remote = window.require('electron').remote;
        const { dialog } = remote;
        dialog.showErrorBox('Отсутствует подлючение к серверу', 'Проверьте свое интернет соединение')
        let w = remote.getCurrentWindow();
        w.close();
    }
}