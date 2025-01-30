const http = require('http');
let requestsCount = 0

const server = http.createServer((reqest, response) => {

    requestsCount++

    response.write('Hi: ' + requestsCount)
    response.end()
})
server.listen(3003)


