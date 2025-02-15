const http = require('http');

let requestsCount = 0

// const server = http.createServer((reqest, response) => {
//     requestsCount++;
//     switch (reqest.url) {
//         case '/students':
//             response.write('Students');
//             break;
//         case '/':
//         case '/courses':
//             response.write('Front+Back');
//             break;
//         default:
//             response.write('404: Not Found');
//     }
//     response.write('requests: ' + requestsCount);
//
//     response.end()
// })
// server.listen(3003)
