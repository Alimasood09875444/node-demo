const http = require("http");
const port = 4000;

const server = http.createServer((req,res)=>{
  res.setHeader("Content-Type","text/html")
  res.write(`
    <html>
    <head>
    <title>Rana Masood Code</title>
    </head>
    <body>
    <h3>Masood</h3>
    <h2>Rana G the great</h2>
    <h3>`+new Date ()+`</h3>
    </body>
    </html>
    `)
  res.end("hlo end")
  process.exit()
});

server.listen(port,()=>{
  console.log(`server is running http://localhost:${port}`);
  
})