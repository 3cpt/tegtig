const Octokit = require("@octokit/rest");
require('dotenv').config();

const octokitObj = new Octokit({
    auth: process.env.GITHUB_API_KEY,
    userAgent: process.env.GITHUB_API_USERAGENT,
    log: {
        debug: () => { },
        info: () => { },
        warn: console.warn,
        error: console.error
    },
});

const getVariables = () => {
    console.log(process.env.GITHUB_API_KEY);
    console.log(process.env.GITHUB_API_USERAGENT);
};

module.exports = {
    octokitObj,
    getVariables
};