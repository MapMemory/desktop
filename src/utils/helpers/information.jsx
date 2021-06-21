import axios from 'axios';
import PublicIP from 'public-ip';
import Server from '../server.jsx';

export default class {
    constructor() { }

    async getIP() {
        return await PublicIP.v4();
    }

    async getGEO() {
        let server = new Server();
        if (server.checkInternet()) {
            return await new Promise(async (resolve) => {
                navigator.geolocation.getCurrentPosition((position) =>
                    resolve({
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }), () => {
                        resolve(
                            new Promise(async (resolve) => {
                                await axios.get("http://api.ipstack.com/check?access_key=67e0b9424cfaf87b2346bafe8fa23f1b").then((result) => {
                                    resolve({
                                        lat: result.data.latitude,
                                        long: result.data.longitude
                                    })
                                }).catch(() => {
                                    resolve({ lat: 0, long: 0 });
                                })
                            })
                        );
                    });
            });
        }
        else {
            return { lat: 0, long: 0 };
        }
    }
}