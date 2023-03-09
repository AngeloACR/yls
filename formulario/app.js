const server = require("./server");
const config = require("../environments/environment");

const formularioPort = config.formularioPort;
const formularioApp = server.init(formularioPort);

formularioApp.listen(formularioPort, () => {
  console.log("Server running at: " + formularioPort);
});
