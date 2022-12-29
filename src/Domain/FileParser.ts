import { UserActivityData } from "./Entities/UserActivityData";

export interface IFileParserInterface {
    readFile: (filePath: string) => Promise<any[]>;
    writeFile: (userActivityData: UserActivityData, month: number, year: number) => Promise<boolean>;
}