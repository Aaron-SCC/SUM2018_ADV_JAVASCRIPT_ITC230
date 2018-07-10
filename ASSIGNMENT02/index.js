var http = require("http"), fs = require('fs');

var movies = require('./lib/module.js');

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  console.log(__dirname + path);
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer(function(req,res){
  console.log('createServer got request');
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      serveStatic(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About:  \nThis is a fully-featured list \nmanagement web application. ');
      break;
      
    case '/getall':
      let found = movies.getAll();
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = JSON.stringify(found);
      res.end(results);
      break;
      
      
    case '/delete':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('delete');
      break;
      
    case '/get':
      let found1 = movies.get(query.title); // get book object
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results1 = (found1) ? JSON.stringify(found1) : "Not found";
      res.end('Results for ' + query.title + "\n" + results1);
      break;
      
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404: ERROR   Page not found.  ');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer');