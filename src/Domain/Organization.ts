export interface IOrganizationInterface {
    organizationName: string;
    getTeams: () => Promise<any[]>;
  }
