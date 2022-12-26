export interface IFileParserInterface {
    readFile: (filePath: string) => Promise<any[]>;
    writeFile: (user: string, pullRequest: number, month: number, year: number) => Promise<boolean>;
}