import getPullRequest from '../Infrastructure/Repositories/PullRequestRepository';
import { IPullRequestInterface } from './Interfaces/PullRequest'

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
        return getPullRequest.asyncGetPullRequestsExecuted(this.userName, this.month);
    }

}
