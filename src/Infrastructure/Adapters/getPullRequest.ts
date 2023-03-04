import { resolve } from "path";
import { string } from "yargs";


const axios = require('axios');
let data = '';

export const syncGetPullRequestsExecuted = async (userName: string, month: string): Promise<string> => {
    console.log(` user name: ${userName} , month: ${month}`);
    const headers = {
        'Authorization': `Bearer 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`
    };
    const config = { headers: headers }
    const response = await axios.get(`https://api.github.com/search/issues?q=type:pr+author:${userName}+created:${month}`, config);
    return response.data.total_count;
}

export default {
    syncGetPullRequestsExecuted: syncGetPullRequestsExecuted,
}
