import axios from "axios";

import CONFIG from "../config";

const APIHelper = {
    get: (targetFunction, configuration) => {
        return axios.get(
            `${CONFIG.backendEndpoint}/${targetFunction}`,
            configuration
        );
    },
    post: (targetFunction, configuration, headers = {}) => {
        return axios.post(
            `${CONFIG.backendEndpoint}/${targetFunction}`,
            configuration,
            { headers }
        );
    },
};

export default APIHelper;
