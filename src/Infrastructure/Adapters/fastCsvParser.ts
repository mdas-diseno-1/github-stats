
import {IFileParserInterface} from "../../Domain/FileParser";
const fs = require("fs");
const fastCsv = require("fast-csv");
export class fastCsvParser implements IFileParserInterface{
    
    
    public readFile (filePath: string): Promise<boolean>{
        return Promise.resolve(false);
    }

    writeFile(data: any[]): Promise<boolean> {
        return Promise.resolve(false);
    }

}