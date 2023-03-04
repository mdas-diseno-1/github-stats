export interface IPullRequestInterface {
  user_id: bigint;
  userName: string;
  merged_at: string;
  count: () => Promise<string>;
}
