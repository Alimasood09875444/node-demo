const http = require("http");
const Port = 5500
const userData=[
  {
    name:"Masood",
    age:22,
    email:"masood4578.com"
  },
  {
    name:"Ali",
    age:36,
    email:"Ali62525.com"
  },
  {
    name:"Abdullah",
    age:20,
    email:"abdullah.com"
  }
  
]
const server = http.createServer((req,res)=>{
  res.setHeader("Content-Type","application/json")
  res.write(JSON.stringify(userData))
  res.end()
});

server.listen(Port,()=>{
  console.log(`Server2 is running http://localhost:${Port}`);
  
})