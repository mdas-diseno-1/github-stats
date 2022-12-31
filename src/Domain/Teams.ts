export interface ITeamInterface {
    team_id: bigint;
    teamName: string;
    merged_at: string;
    getMembers: () => Promise<any>;
  }