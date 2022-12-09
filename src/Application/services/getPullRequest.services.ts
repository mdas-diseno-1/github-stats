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

export const syncGetUser = async (userName: string) => {
    const month = '2022-11'
    const response = await axios.get(`${API_ENDPOINT}/search/issues?q=type:pr+author:${userName}+create:${month}`)
    console.log(response.data);
}

export default {
    syncGetUser,
    asyncGetuser
}