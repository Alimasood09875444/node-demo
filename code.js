const fs = require('fs');
const os = require('os')
fs.writeFileSync("dummy.txt","Masood is good developer")

console.log(os.platform());
console.log(os.hostname());
