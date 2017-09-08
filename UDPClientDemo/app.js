var dgram = require('dgram')    // 导入udp的工具模块

var socket = dgram.createSocket('udp4') //  创建一个以udp4协议为标准的socket的对象

// 绑定并设置回调的接口
socket.bind(()=>{
    socket.setBroadcast(true)
})

/***client向server发送信息***/

// 创建消息体
var message = new Buffer('Hello World')

// 客户端向服务端发送消息
socket.send(message,0,message.length,1234,'192.168.1.1',(error,bytes)=>{
    socket.close()
})