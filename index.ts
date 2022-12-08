import getPullRequestServices from "./src/application/services/getPullRequest.services";
const prompt = require('prompt-sync')({ sigint: true });
import * as yargs from 'yargs'

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Github name?', name => {
//   getPullRequestServices.syncGetUser(name);
//   readline.close();
// });


const name = prompt('What is your name?');
getPullRequestServices.syncGetUser(name);

// const { argv } = yargs.option("userName", { describe: "GitHub user name" })
// const userName = argv["_"];
// console.log(argv["_"]);
// getPullRequestServices.syncGetUser(userName);

