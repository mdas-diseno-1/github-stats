import getPullRequestServices from "./src/application/services/getPullRequest.services";
import { PullRuquestExecuted } from './src/application/user_cases/getPullRequests';
const prompt = require('prompt-sync')({ sigint: true });
import * as yargs from 'yargs'
import { resolve } from "path";

const name = prompt('What is your name? ');
const month = prompt('What month (YYYY-MM): ');
const pullRuquestExecuted = new PullRuquestExecuted(name, month);
pullRuquestExecuted.getPrExecuteCount().then((value) => {
    console.log(value);
})

// const { argv } = yargs.option("userName", { describe: "GitHub user name" })
// const userName = argv["_"];
// console.log(argv["_"]);
// getPullRequestServices.syncGetUser(userName);

