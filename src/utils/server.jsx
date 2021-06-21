import axios from 'axios';
import CONSTANTS from '../utils/constants.jsx';
import Electron from '../utils/electron.js';
import StateMessages from '../utils/stateMessages.js';

export default class {
    constructor() {
        this.electron = new Electron();
        this.stateMessages = new StateMessages();
    }

    async getObjects(name) {
        return {
            monuments: await this.getMonuments(name),
            tables: await this.getTables(name),
            streets: await this.getStreets(name)
        };
    }

    async checkInternet() {
        try {
            return await new Promise(async (resolve, reject) => {
                await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ROOT.GET_IS_HERE).then(() => {
                    resolve(true);
                }).catch((e) => reject(e))
            });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getAdminIsAuth(login, password) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.GET_IS_AUTH + `?login=${login}` + `&password=${password}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async setRating(aim) {
        try {
            axios.post(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.SET_RATING + `?ip=${await aim.person.information.getIP()}` + `&id=${aim.object.id}` + `&scheme=${aim.object.id_scheme}` + `&rating=${aim.newRating}`);
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getImgsOfObject(aim) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_IMG_OF_OBJECT + `?scheme=${aim.scheme}` + `&id=${aim.id}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getAimObject(aim) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_AIM_OBJECT + `?scheme=${aim.scheme}` + `&id=${aim.id}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getPoint(name) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_POINT + `?name=${name}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getMonuments(name) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_MONUMENTS + `?name=${name}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getTables(name) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_TABLES + `?name=${name}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }

    async getStreets(name) {
        try {
            return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.MAP.GET_STREETS + `?name=${name}`).then((result) => { return result.data });
        }
        catch (error) {
            this.stateMessages.network_error(error.toJSON().message);
        }
    }
}