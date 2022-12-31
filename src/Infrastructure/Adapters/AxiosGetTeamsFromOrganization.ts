import { resolve } from "path";
import { string } from "yargs";
import { Any } from "typeorm";
import { IOrganizationInterface } from "../../Domain/Organization";
const axios = require('axios');


export class AxiosGetTeamsFromOrganization implements IOrganizationInterface {
    organizationName: string;
    organization_id: string;
    organizationTeams: any[any[any]];

    constructor(organizationName: string) {
        this.organizationName = organizationName;
        this.organizationTeams = this.syncGetTeamsFromOrganization(organizationName);
        //console.log(this.syncGetOrganization(organizationName));
    }

    public async getTeams(): Promise<any[]> {
        return this.organizationTeams;
    }

    private async syncGetTeamsFromOrganization(organizationName: string): Promise<any[]> {
        const headers = {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN} `
        };
        const config = { headers: headers};
        const response = await axios.get(`${process.env.GITHUB_API}/orgs/${organizationName}/teams`, config);
        return Promise.resolve(response.data);
    }

    private async syncGetOrganization(organizationName: string): Promise<String> {
        const headers = {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN} `
        };
        const config = { headers: headers };
        const response = await axios.get(`${process.env.GITHUB_API}/orgs/${organizationName}`, config);
        return resolve(response.data.id);
    }


}

