var dgram = require('dgram')    // nodejs中udp的模块 datagram数据报的意思

var serverSocket = dgram.createSocket('udp4')

/**
 * 监听错误事件
 */
serverSocket.on('error', (err) => {

    console.log('server error :' + err.stack)

})

/**
 * 监听客户端发来的信息
 */
serverSocket.on('message', (msg, info) => {
    console.log('server got' + msg + 'from' + info.address + ':' + info.port)
})

/**
 * 监听‘监听’信息
 */
serverSocket.on('listening', () => {
    console.log('server is listening')
})

serverSocket.bind(1234)