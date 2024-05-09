var fs = require('fs');
var bigJson=[];
for(let m = 1; m <= 555; m++) {
    var obj = JSON.parse(fs.readFileSync('json_files/'+m, 'utf8'));
    var smallJson = {};

    smallJson.hash = obj.hash;
    smallJson.name = obj.name;
    smallJson.attributes = obj.attributes;
    bigJson.push(smallJson);
}
console.log(bigJson);
fs.writeFileSync("test.txt", JSON.stringify(bigJson));
