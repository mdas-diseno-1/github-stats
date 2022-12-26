
import { IFileParserInterface } from './FileParser'
const fs = require("fs");
const fastCsv = require("fast-csv");
export class fastCsvParser implements IFileParserInterface{
    
    
    public readFile (filePath: string): Promise<boolean>{

        return
    }

}