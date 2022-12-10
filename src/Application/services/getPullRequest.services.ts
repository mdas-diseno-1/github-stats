import { resolve } from "path";
import { string } from "yargs";

var axios = require('axios');
var data = '';
const API_ENDPOINT = 'https://api.github.com';

const asyncGetuser = (userName: string) => {
    var config = {
        method: 'get',
        url: `https://api.github.com/users/${userName}/repos`,
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

export const syncGePullRequestExecuted = async (userName: string, month: string) => {
    console.log(` user name: ${userName} , month: ${month}`);
    const response = await axios.get(`${API_ENDPOINT}/search/issues?q=type:pr+author:${userName}+created:${month}`, {
        headers: {
            'Authorization': 'Bearer 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'
        }
    });
    return response.data.total_count;
}

export default {
    syncGePullRequestExecuted,
    asyncGetuser
}