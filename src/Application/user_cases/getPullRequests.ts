import getPullRequestServices from '../services/getPullRequest.services';
import { IPullRequestInterface } from '../../domain/pullRequest.interface'
import { string } from 'yargs';

export class PullRuquestExecuted implements IPullRequestInterface {
    merged_at: string;
    user_id: bigint;
    userName: string;
    month: string;
    constructor(userName: string, month: string) {
        this.userName = userName;
        this.month = month;
    }

    public getPrExecuteCount(): Promise<string> {
        return getPullRequestServices.syncGePullRequestExecuted(this.userName, this.month);
    }

}