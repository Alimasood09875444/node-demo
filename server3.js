const http = require("http");
const { locks } = require("worker_threads");
const Port = 5800

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url=="/"){
    res.write("<h1>Home page</h1>")
  }
  else if(req.url=="/login"){
    res.write("<h1>login page</h1>")
  }else{
    res.write("<h1>Other page</h1>")
  }

  res.end()
})
server.listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})