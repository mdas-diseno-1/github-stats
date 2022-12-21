import { resolve } from "path";
import { string } from "yargs";
const axios = require('axios');

async function getPullRequestDeletedLines(owner, repo, pullNumber) {
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`, {
    auth: {
      username: 'your-username',
      password: 'your-password'
      
    }
  });

  return response.data.reduce((total, file) => total + file.deletions, 0);
}