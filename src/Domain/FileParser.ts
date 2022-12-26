export interface IFileParserInterface {
    readFile: (filePath: string) => Promise<boolean>;
    writeFile: (data: any[]) => Promise<boolean>;
}