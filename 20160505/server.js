var http = require("http");
var url = require("url");
var fs = require("fs");

//->使用NODE创建一个服务:当客户端发送一次请求的时候就会把对应的回调函数执行,并且传递两个参数值REQUEST、RESPONSE
var server = http.createServer(function (req, res) {
    //->解析客户端发送请求的这个地址
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname, query = urlObj.query;

    //->前端路由判断:HTML/JS/CSS文件读取,并且返回给客户端进行解析
    var reg = /\.(html|css|js)/i;
    if (reg.test(pathname)) {
        var fileCon = fs.readFileSync("." + pathname, "utf8");
        var suffix = reg.exec(pathname)[1];
        var conType = suffix === "html" ? "text/html" : (suffix === "css" ? "text/css" : "text/javascript");
        res.writeHead(200, {'content-type': conType});
        res.end(fileCon);
    }
});
server.listen(9876, function () {
    console.log("NODE服务已经成功启动,正在监听'9876'这个端口!");
});