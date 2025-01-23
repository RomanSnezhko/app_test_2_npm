const http = require("http");
const { getDefaultLibFileName } = require("typescript/lib/tsserverlibrary");

const server = http.createServer((Request, Response) => {
  Response.write("Hi my dear Romanchik ");
  Response.end();
});
server.listen(3003);
