var httpServer = require('http').createServer()
var five = require("johnny-five");
var io = require('socket.io')(httpServer)

//后端接口
let port = 3002; 

httpServer.listen(port)
console.log('Server available at http://localhost:' + port);  

var board = new five.Board();
var led;

board.on("ready", function() {
  console.log("Board is ready!")
  led = new five.Led(13)

});

io.on('connection',socket=>{
  console.log(`New Connection: ${socket.id}`)

  socket.on('led:on',data=>{
    led.blink()
    console.log(`LED On`)
  })

  socket.on('led:off',data=>{
    led.stop().off()
    console.log(`LED Off`)
  })
})