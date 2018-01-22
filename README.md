# express_socket
利用nodejs平台,express框架和socket.io  结合 做的简单即时聊天室例子


结合 express 框架时  socket.io服务编写在根目录下/bin/.www 文件中 具体修改
```

/**********************************修改开始*******************************/
/**
 * Create HTTP server.
 */

//var server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

//server.listen(port);
/**********************************替换内容*******************************/

var server = app.listen(app.get('port'),function(){
	console.log('Express server listening on port ' + server.address().port);
});
server.on('error', onError);
server.on('listening', onListening);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
   //io事件处理
});

/**********************************修改结束*******************************/

```

遇到问题  .jade模板框架

在模板中编写JS代码块 不能编译通过   请知道的大神告知
