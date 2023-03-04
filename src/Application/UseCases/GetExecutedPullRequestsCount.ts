import PullRequestRepository from '../../Infrastructure/Repositories/PullRequestRepository';
import { IPullRequestRepository } from '../../Domain/Interfaces/IPullRequestRepository';

export class GetExecutedPullRequestsCount {
    userName: string;
    month: string;
    pullRequestRepository: IPullRequestRepository;
    constructor(userName: string, month: string) {
        this.userName = userName;
        this.month = month;
        this.pullRequestRepository = PullRequestRepository;
    }

    public execute(): Promise<string> {
        return PullRequestRepository.asyncGetPullRequestsExecuted(this.userName, this.month);
    }
}
