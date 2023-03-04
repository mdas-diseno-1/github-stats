import { AxiosHttpClient } from "../Clients/AxiosHttpClient";

export default class PullRequestRepository {
    static async asyncGetPullRequestsExecuted(userName: string, month: string): Promise<string> {
        console.log(` user name: ${userName} , month: ${month}`);
        const client = new AxiosHttpClient();
        const response = await client.get(`/search/issues?q=type:pr+author:${userName}+created:${month}`);
        return response.data.total_count;
    }
}
