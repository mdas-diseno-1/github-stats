import { GetExecutedPullRequestsCount } from "./GetExecutedPullRequestsCount";
import { UserActivityData } from "../../Domain/Entities/UserActivityData";
import { ICsvRepository } from "../../Domain/interfaces/ICsvRepository";
import { CsvRepositoryImpl } from "../../Infrastructure/Adapters/CsvRepository";

export class GetGithubStatsByUser {
    userActivityData = new UserActivityData();
    constructor(userName: string, month: string) {
        this.userActivityData.name = userName;
        this.userActivityData.month = month;
    }

    public execute(): void {
        const executedPullRequestsCount = new GetExecutedPullRequestsCount(this.userActivityData.name, this.userActivityData.month);
        executedPullRequestsCount.execute().then((value) => {
            this.userActivityData.pullRequestsExecuted = +value;
            console.log(value);
        });
        const csvRepository = new CsvRepositoryImpl("report.csv", ["id", "name", "month", "pullRequestsExecuted"]);
        csvRepository.create(this.userActivityData);
    }

}