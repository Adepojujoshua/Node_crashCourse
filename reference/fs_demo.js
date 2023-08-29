const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'file_system'),{}, err => {
//     if (err) throw err;
//     console.log('Directory created');
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, 'file_system','file2.txt'),'Testing the extension', err => {
//     if (err) throw err;
//     console.log('file created');
// // append file
//     fs.appendFile(path.join(__dirname, 'file_system','file2.txt'),'/n i love node.js', err => {
//         if (err) throw err;
//         console.log('file appended');
//     })
// })
// Read the file----------------------------------------------------------------
// fs.readFile(path.join(__dirname,'file_system','file2.txt'),'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data)
// })

fs.rename(path.join(__dirname,'file_system','file2.txt'),path.join(__dirname,'file_system','test.txt'), err=>{
    if (err) throw err;
    console.log('file renamed');
})

