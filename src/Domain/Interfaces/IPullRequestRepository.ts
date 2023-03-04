
export interface IPullRequestRepository {
  asyncGetPullRequestsExecuted(userName: string, month: string): Promise<string>;
}
