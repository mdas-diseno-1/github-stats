import { resolve } from "path";
import { string } from "yargs";
const axios = require('axios');

async function getPullRequestDeletedLines(userName: string, month: string) {
  console.log(` user name: ${userName} , month: ${month}`);
    const headers = {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN} `
    };
    const config = { headers: headers }
    const response = await axios.get(`${process.env.GITHUB_API}/search/issues?q=type:pr+author:${userName}+created:${month}`, config);
  return response.data.reduce((total, file) => total + file.deletions, 0);
}