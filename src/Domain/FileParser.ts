export interface IFileParserInterface {
    readFile: (filePath: string) => Promise<boolean>;
    writeFile: (user: string, pullRequest: number, month: number, year: number) => Promise<boolean>;
}