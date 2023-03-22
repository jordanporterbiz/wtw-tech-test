import csvtojson from 'csvtojson';
import * as fs from 'fs';


export const convertToCsvFormat = async (csvFilePath: string) => {
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    
    fs.writeFileSync(csvFilePath + '.json', JSON.stringify(jsonArray), { encoding: 'utf8'});
    
    return jsonArray;
}