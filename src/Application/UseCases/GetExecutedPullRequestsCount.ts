import getPullRequest from '../../Infrastructure/Adapters/getPullRequest';

export class GetExecutedPullRequestsCount {
    userName: string;
    month: string;
    constructor(userName: string, month: string) {
        this.userName = userName;
        this.month = month;
    }

    public execute(): Promise<string> {
        return getPullRequest.syncGetPullRequestsExecuted(this.userName, this.month);
    }

}
