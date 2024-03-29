import getPullRequest from '../Infrastructure/Adapters/getPullRequest';
import { IPullRequestInterface } from './PullRequest'
import { string } from 'yargs';

export class ExecutedPullRequests implements IPullRequestInterface {
    merged_at: string;
    user_id: bigint;
    userName: string;
    month: string;
    constructor(userName: string, month: string) {
        this.userName = userName;
        this.month = month;
    }

    public count(): Promise<string> {
        return getPullRequest.syncGetPullRequestsExecuted(this.userName, this.month);
    }

}
