import { resolve } from "path";
import { string } from "yargs";

const axios = require('axios');
let data = '';
const API_ENDPOINT = 'https://api.github.com';

const asyncGetUser = (userName: string) => {
    const config = {
        method: 'get',
        url: `${API_ENDPOINT}/users/${userName}/repos`,
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default {
    asyncGetUser: asyncGetUser
}
