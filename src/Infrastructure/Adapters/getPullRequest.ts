import { resolve } from "path";
import { string } from "yargs";

const axios = require('axios');
let data = '';
const API_ENDPOINT = 'https://api.github.com';

export const syncGetPullRequestsExecuted = async (userName: string, month: string): Promise<string> => {
    console.log(` user name: ${userName} , month: ${month}`);
    const headers = {
        'Authorization': 'Bearer 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'
    };
    const config = {headers: headers}
    return axios.get(`${API_ENDPOINT}/search/issues?q=type:pr+author:${userName}+created:${month}`, config)
        .then((res) => res.data.count);
}

export default {
    syncGetPullRequestsExecuted: syncGetPullRequestsExecuted,
}
