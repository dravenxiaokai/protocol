var net = require('net')    //导入net模块，因为net模块中包涵TCP

var server = net.createServer(function (conn) {

    console.log('new connection is connecting..')
    conn.write('\n + hello buddy ')

})

server.listen(3000,function(){
    console.log('server is listening..')
})