var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res){
    var q = url.parse(req.url,true);
    var filename = "public" + q.pathname;
    fs.readFile(filename, function(err,data){
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            console.log("404 for " + filename);
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8516, function() { //refactor to a port config
    console.log("Application is listening on " + this.address().address + ":" + this.address().port);
});
