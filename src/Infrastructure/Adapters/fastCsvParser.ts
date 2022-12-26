const fs = require("fs");
const csv = require("fast-csv");
import { IFileParserInterface } from "../../Domain/FileParser";

export class fastCsvParser implements IFileParserInterface{
    public readFile (filePath: string): Promise<any[]>{
        let data = [];
        fs.createReadStream(filePath)
            .pipe(csv({ headers: false }))
            .on('error', error => console.error(error))
            .on('data', row => {
                console.log(row);
                data.push(row);
            })
            .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
        return Promise.resolve(data);
    }

    writeFile(user: string, pullRequest: number, month: number, year: number): Promise<boolean> {
        const stream = csv({ headers:true });
        stream.pipe(fs.createWriteStream("../../Reports/" + user + month + year + ".csv"))
        stream.write([user, pullRequest, month, year])
        stream.on('error', error => console.error(error));
        stream.on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
        return Promise.resolve(true);
    }

}