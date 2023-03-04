import { resolve } from "path";
import { string } from "yargs";

const axios = require('axios');
let data = '';

const asyncGetUser = (userName: string) => {
    const config = {
        method: 'get',
        url: `${process.env.GITHUB_API}/users/${userName}/repos`,
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
