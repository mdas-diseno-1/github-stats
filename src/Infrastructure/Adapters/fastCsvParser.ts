const fs = require("fs");
const csv = require("fast-csv");
import {IFileParserInterface} from "../../Domain/FileParser";
import {format} from "fast-csv";

export class fastCsvParser implements IFileParserInterface{
    public readFile (filePath: string): Promise<boolean>{
        let data = [];
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: false }))
            .on('error', error => console.error(error))
            .on('data', row => {
                console.log(row);
                //each row can be written to db
                data.push(row);
            })
            .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
        return Promise.resolve(true);
    }

    writeFile(user: string, pullRequest: number, month: number, year: number): Promise<boolean> {
        const stream = format({ headers:true });
        stream.pipe(fs.createWriteStream("../../Reports/" + user + month + year + ".csv"))
        stream.write([user, pullRequest, month, year])
        stream.on('error', error => console.error(error));
        stream.on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
        return Promise.resolve(true);
    }

}