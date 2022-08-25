var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {

    const path = "./public" + req.url;

    if (fs.existsSync(path)) {

        const ext = path.substring(path.lastIndexOf('.'));

        const mimes = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript"
        }

        fs.readFile(path, (err, data) => {
            res.writeHead(200, { 'Content-Type': mimes[ext] });
            res.write(data);
            return res.end();
        });
    } else {
        console.log(req.url)
    }
}).listen(8005);