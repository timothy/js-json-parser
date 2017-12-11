/**
 * Created by Timothy
 */

let fs = require('fs');
let modList = fs.readFileSync('./GetStops.json');
modList = JSON.parse(modList);


let NewArray = [];

for (let i = 0; i < modList.length; i++) {
    let temp = {};

    temp.Description = modList[i].Description;
    temp.Latitude = modList[i].Latitude;
    temp.Longitude = modList[i].Longitude;

    NewArray.push(temp)
}

fs.writeFileSync('./GetStops1.json', JSON.stringify(NewArray));


console.log("Complete you should go check to make sure it all went down ok");