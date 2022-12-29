import { GetExecutedPullRequestsCount } from "./src/Application/UseCases/GetExecutedPullRequestsCount";
import { AppDataSource } from "./src/data-source"
import * as yargs from 'yargs'
import { resolve } from "path";
import * as dotenv from "dotenv";
dotenv.config();
const prompt = require('prompt-sync')({ sigint: true });

AppDataSource.initialize().then(async () => { }).catch(error => console.log(error))

const name = prompt('What is your name? ');
const month = prompt('What month (YYYY-MM): ');
const executedPullRequestsCount = new GetExecutedPullRequestsCount(name, month);

executedPullRequestsCount.execute().then((value) => {
    console.log(value);
});

// const { argv } = yargs.option("userName", { describe: "GitHub user name" })
// const userName = argv["_"];
// console.log(argv["_"]);
// getPullRequest.syncGetUser(userName);

