var http = require("http");
var io = require('socket.io'); // 加入 Socket.IO

var server = http.createServer(function (request, response) {
});

// 開啟監聽埠
const port = 8001
if(server.listen(port)){
    console.log(`監聽於 ${port} port...`)
}

var serv_io = io.listen(server);
// serv_io.set('log level', 1); // 關閉 debug 訊息

//建立socket.io連接
serv_io.sockets.on('connection', function (socket) {

    // 時鐘計
    setInterval(function () {
        // emit的第一個參數，為自定義函式名
        socket.emit('date', { 'date': new Date() });
    }, 1000);

    // 接收來自於瀏覽器的資料
    // on的第一個參數為瀏覽器定義的函式名
    socket.on('upName', function (obj) {
        // 資料顯示在伺服器
        console.log(obj.name);
        // 傳送資料回瀏覽器
        socket.emit('greet', {
            msg: `你好呀~ ${obj.name}`,
            code: 200
        });
    });
});

