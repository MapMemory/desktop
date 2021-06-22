import Information from './helpers/information.jsx';
import Light from './themes/light.jsx';
import Dark from './themes/dark.jsx';


export default class {
    constructor() {
        this.information = new Information();
        this.light = new Light();
        this.dark = new Dark();

        let storage = window.localStorage;

        this.tone = storage.getItem("tone");
        this.color = storage.getItem("color");

        if (this.tone === undefined) {
            this.tone = 'light';
            storage.setItem('tone', 'light');
        }

        if (this.color === undefined) {
            this.color = 'green';
            storage.setItem('color', 'green');
        }
    }

    setTheme(tone, color) {
        let storage = window.localStorage;

        this.tone = tone;
        this.color = color;

        storage.setItem('tone', tone);
        storage.setItem('color', color);
    }

    getThemeTone() {
        if (this.tone === 'light') {
            return 'light';
        }
        if (this.tone === 'dark') {
            return 'dark';
        }
    }

    getThemeColors() {
        if (this.tone === 'light') {
            if (this.color === 'green') {
                return this.light.green();
            }

            if (this.color === 'orange') {
                return this.light.orange();
            }

            if (this.color === 'red') {
                return this.light.red();
            }
        }

        if (this.tone === 'dark') {
            if (this.color === 'green') {
                return this.dark.green();
            }

            if (this.color === 'orange') {
                return this.dark.orange();
            }

            if (this.color === 'red') {
                return this.dark.red();
            }
        }

        return this.light.green();
    }
}