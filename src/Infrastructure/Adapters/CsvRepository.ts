import { UserActivityData } from "../../Domain/Entities/UserActivityData";
import { ICsvRepository } from "../../Domain/interfaces/ICsvRepository";
const fs = require('fs');
const csv = require('csv-parse');
import * as fastcsv from 'fast-csv';

export class CsvRepositoryImpl<T> implements ICsvRepository<T> {
    private readonly filename: string;
    private readonly columns: string[];

    constructor(filename: string, columns: string[]) {
        this.filename = filename;
        this.columns = columns;
    }

    async findAll(): Promise<T[]> {
        const results: T[] = [];
        const parser = fs.createReadStream(this.filename).pipe(csv({ columns: true }));
        for await (const record of parser) {
            results.push(record as T);
        }
        return results;
    }

    async create(UserActivityData: UserActivityData): Promise<void> {
        const rows = Object.keys(UserActivityData).map(item => {
            return this.columns.reduce((obj, col) => {
                obj[col] = item[col];
                return obj;
            }, {});
        });
        const stream = fs.createWriteStream(this.filename);
        fastcsv.write(rows, { headers: true }).pipe(stream);
        await new Promise((resolve, reject) => {
            stream.on('finish', resolve);
            stream.on('error', reject);
        });
    }
}
