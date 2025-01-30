const http = require('http');
let reqestCount = 0

const server = http.createServer((reqest, response) => {
    reqestCount++
    response.wrinte("Wear")
    response.end()
})
server.listen(3003)

console.log('safw')