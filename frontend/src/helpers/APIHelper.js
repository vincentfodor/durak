import axios from "axios";

import CONFIG from "../config";

const APIHelper = {
    get: (targetFunction, configuration) => {
        axios.get(`${CONFIG.backendEndpoint}/${targetFunction}`, configuration);
    },
    post: (targetFunction, configuration) => {
        return axios.post(
            `${CONFIG.backendEndpoint}/${targetFunction}`,
            configuration
        );
    },
};

export default APIHelper;
