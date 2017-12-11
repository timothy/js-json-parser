/**
 * Created by Timothy
 */
let fileName = "test.json";
let fs = require('fs');
let modList = fs.readFileSync('./' + fileName);
modList = JSON.parse(modList);

let NewArray = [];

for (let i = 0; i < modList.length; i++) {
    let temp = {};

    temp.Description = modList[i].Description;
    temp.Latitude = modList[i].Latitude;
    temp.Longitude = modList[i].Longitude;

    NewArray.push(temp)
}

fs.writeFileSync('./' + fileName + "1", JSON.stringify(NewArray));


console.log(`Complete! You should have a files named ${fileName}1.json in your current directory`);