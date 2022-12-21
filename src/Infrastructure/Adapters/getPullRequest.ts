import { resolve } from "path";
import { string } from "yargs";

const axios = require('axios');
let data = '';
let linesdeleted='';
let linesadded='';

export const syncGetPullRequestsExecuted = async (userName: string, month: string): Promise<string> => {
    console.log(` user name: ${userName} , month: ${month}`);
    const headers = {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN} `
    };
    const config = { headers: headers }
    const response = await axios.get(`${process.env.GITHUB_API}/search/issues?q=type:pr+author:${userName}+created:${month}`, config);
    return response.data.total_count;
}

export default {
    syncGetPullRequestsExecuted: syncGetPullRequestsExecuted,
}

async function getPullRequestAddedLines(owner, repo, pullNumber) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`, {
      auth: {
        username: 'your-username',
        password: 'your-password'
        
      }
    });
  
    return response.data.reduce((total, file) => total + file.additions, 0);
  }

  async function getPullRequestDeletedLines(owner, repo, pullNumber) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`, {
      auth: {
        username: 'your-username',
        password: 'your-password'
        
      }
    });
  
    return response.data.reduce((total, file) => total + file.deletions, 0);
  }
