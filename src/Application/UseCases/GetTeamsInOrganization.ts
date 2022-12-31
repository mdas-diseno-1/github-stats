import { IOrganizationInterface } from '../../Domain/Organization';

export class GetTeamsInOrganization {
    organization: IOrganizationInterface;
    constructor(organization: IOrganizationInterface) {
        this.organization = organization;
    }

    public execute(): Promise<any[]> {
        return this.organization.getTeams();
    }

}
