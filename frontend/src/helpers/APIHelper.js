import axios from "axios";

import CONFIG from "../config";

const APIHelper = {
    get: (targetFunction, configuration) => {
        axios
            .get(`${CONFIG.backendEndpoint}/${targetFunction}`, configuration)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });
    },
    post: (targetFunction, configuration) => {
        return axios
            .post(`${CONFIG.backendEndpoint}/${targetFunction}`, configuration)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    },
};

export default APIHelper;
