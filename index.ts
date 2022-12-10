import getPullRequestServices from "./src/Infrastructure/Adapters/getPullRequest";
import { GetExecutedPullRequestsCount } from './src/Application/UseCases/GetExecutedPullRequestsCount';
const prompt = require('prompt-sync')({ sigint: true });
import * as yargs from 'yargs'
import { resolve } from "path";

const name = prompt('What is your name? ');
const month = prompt('What month (YYYY-MM): ');
const executedPullRequestsCount = new GetExecutedPullRequestsCount(name, month);

executedPullRequestsCount.execute().then((value) => {
    console.log(value);
})

// const { argv } = yargs.option("userName", { describe: "GitHub user name" })
// const userName = argv["_"];
// console.log(argv["_"]);
// getPullRequest.syncGetUser(userName);

