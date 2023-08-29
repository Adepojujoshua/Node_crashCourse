// const Person = require('./person');

// const Person1 = new Person('Bemiwo',23);
// Person1.greeting();

// const Logger = require('./logger')

// const logger = new Logger();

// logger.on('message', data => console.log('Called listen', data));

// logger.log('Hello world')

const http = require('http');
const fs = require('fs')
const path = require('path')

const port = 5000;

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err,content)=>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content)
//         })
//     }
//     if(req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), 'utf8', (err,content)=>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content)
//         })
//     }
//     if(req.url === '/api/users') {
//         const users = [
//             {'name':'bemiwo', 'age':20},
//             {'name':'johndoe','age':23}
//         ]
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users))
//     }
// })

const server = http.createServer((req, res) => {
    let filepath = path.join(__dirname, 'public', (req.url) === '/' ? 'index.html' : (`${req.url}.html`));
    // console.log(filepath)
    // res.end();
    let extname = path.extname(filepath);

    let contentType = 'text/html';

    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filepath, (err, content)=>{
        if(err){
            //ENOENT ERR
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf-8')
                })
            }
            // ANOTHER TYPE OF ERROR
            else{
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end(`Server error: ${err.code} ${err.message}`);
            }
        }
        else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8')
        }
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})