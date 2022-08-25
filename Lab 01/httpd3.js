var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res)=>{

  const urlPath = req.url.split("?")[0];
  const path = "./public" + urlPath

  if(fs.existsSync(path)) {

    const ext = path.substring(path.lastIndexOf('.'));
    const mimes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript"
    }
    
    fs.readFile(path,(err, data)=>{
      res.writeHead(200, {'Content-Type': mimes[ext]});
      res.write(data);
      return res.end();
    });
  } else {
      console.log("File Not Found.")
  }

  console.log("Method: "+req.method)
  console.log("URL: "+ urlPath)
  const queryParams = url.parse(req.url, true).query;
  console.log(queryParams);
}).listen(8009)