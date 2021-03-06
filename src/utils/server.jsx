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

    async setDBInfo(uncooked_points) {
        let points = {
            monuments: [],
            tables: [],
            streets: [],
            directions: [],
            pictures: [],
            ratings: []
        };

        for (const point of uncooked_points) {
            if (!point.isDeleted) {
                if (point.type === 'monument')
                    points.monuments.push({
                        name: point.name,
                        description: point.description,
                        direction: point.direction,
                        lat: point.lat,
                        long: point.long,
                        images: await Promise.all(point.images.map(async (image) => (image.includes('blob')) ? (await new Promise(async (resolve) => await fetch(image).then((result) => result.blob().then((result) => {
                            var reader = new FileReader();
                            reader.onload = function () {
                                var dataUrl = reader.result;
                                var base64 = dataUrl.split(',')[1];
                                resolve(base64);
                            };
                            reader.readAsDataURL(result);
                        })))) : (image))),
                        ratingArray: await this.getRatingArray(1, (point.id) ? point.id : -1)
                    });

                if (point.type === 'table')
                    points.tables.push({
                        name: point.name,
                        description: point.description,
                        direction: point.direction,
                        lat: point.lat,
                        long: point.long,
                        images: await Promise.all(point.images.map(async (image) => (image.includes('blob')) ? (await new Promise(async (resolve) => await fetch(image).then((result) => result.blob().then((result) => {
                            var reader = new FileReader();
                            reader.onload = function () {
                                var dataUrl = reader.result;
                                var base64 = dataUrl.split(',')[1];
                                resolve(base64);
                            };
                            reader.readAsDataURL(result);
                        })))) : (image))),
                        ratingArray: await this.getRatingArray(1, (point.id) ? point.id : -1)
                    });

                if (point.type === 'street')
                    points.streets.push({
                        old_name: point.old_name,
                        new_name: point.new_name,
                        description: point.description,
                        direction: point.direction,
                        start_lat: point.start_lat,
                        start_long: point.start_long,
                        end_lat: point.end_lat,
                        end_long: point.end_long,
                        images: await Promise.all(point.images.map(async (image) => (image.includes('blob')) ? (await new Promise(async (resolve) => await fetch(image).then((result) => result.blob().then((result) => {
                            var reader = new FileReader();
                            reader.onload = function () {
                                var dataUrl = reader.result;
                                var base64 = dataUrl.split(',')[1];
                                resolve(base64);
                            };
                            reader.readAsDataURL(result);
                        })))) : (image))),
                        ratingArray: await this.getRatingArray(1, (point.id) ? point.id : -1)
                    });
            }
        }

        return new Promise(async (resolve) => {
            await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.CREATE_BECKUP_TABLES).then(async (result) => {
                if (result)
                    await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.DELETE_TABLES).then(async (result) => {
                        if (result)
                            await axios.post(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.SET_DATA_TO_TABLES, points).then(async (result) => {
                                if (result)
                                    await axios.post(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.MOVE_FILES_FROM_FOLDER).then(async (result) =>
                                        resolve(result)
                                    )
                                else
                                    resolve(result)
                            })
                        else
                            resolve(result)
                    })
                else
                    resolve(result)
            })
        });
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

    async getRatingArray(id_scheme, id_object) {
        return await axios.get(CONSTANTS.SERVER_ADDRESS + CONSTANTS.PAGES.ADMIN.GET_RATING_ARRAY + `?id_scheme=${id_scheme}` + `&id_object=${id_object}`).then((result) => { return result.data; });
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