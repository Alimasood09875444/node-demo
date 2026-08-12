const http = require("http");
const arg = process.argv;
const Port = arg[2]
const server = http.createServer((req,res)=>{
  res.write("Hlo Masood")
  res.end()
}
)
server.listen(Port)