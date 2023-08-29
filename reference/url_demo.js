const url = require('url');

const myurl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

console.log(myurl.href)
console.log(myurl.toString())
console.log(myurl.host);
console.log(myurl.hostname)
console.log(myurl.pathname)
console.log(myurl.search)
console.log(myurl.searchParams)
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams)
myurl.searchParams.forEach((name, value) => {
    console.log(`${name}: ${value}`)
})