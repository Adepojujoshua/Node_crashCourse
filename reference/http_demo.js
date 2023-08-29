const http = require('http');
const PORT = 5000

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end(`<h1> Homepage! </h1>`)
    }
});

server.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
});