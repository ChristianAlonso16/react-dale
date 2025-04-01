import axios from "axios";
import Alerts from "./Alerts";
const SERVER_URL = "https://jsonplaceholder.typicode.com"
const client = axios.create({
    baseURL: SERVER_URL,
    timeout: 30000
})
client.interceptors.request.use(
    function (config) {

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)


client.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201) {
            if (response.data.data === null) {
                return Promise.resolve(response);
            }
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    async (error) => {
        if (!error.response) {
            Alerts.showMessage("El servicio no respondio", "error")
            localStorage.removeItem('token')
            return Promise.reject(error)
        }
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    Alerts.showMessage("Proceso incorrecto", "error")

                    break;
                case 401:
                    Alerts.showMessage("Usuario invalido", "error")

                    break;
                case 403:
                    Alerts.showMessage("Proceso invalido", "error")
                    break;
                case 404:
                    Alerts.showMessage("Recurso no encontrado", "error")
                    break;
                case 500:
                    Alerts.showMessage("Algo sucedio con el servicio", "error")
                    break;

            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default {
    doGet: function (endPoint, config) {
        return client.get(endPoint, config);
    },
    doPost: function (endPoint, object, config) {
        return client.post(endPoint, object, config || {});
    },
    doPut: function (endPoint, object, config) {
        return client.put(endPoint, object, config || {});
    },
    doDelete: function (endPoint) {
        return client.delete(endPoint);
    },
};