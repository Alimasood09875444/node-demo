const fs = require('fs');
const os = require('os')
const {log,warn}=require('console')
fs.writeFileSync("dummy.txt","Masood is good developer")

console.log(os.platform());
console.log(os.hostname());
log("custom hock")
warn("custom hock")
