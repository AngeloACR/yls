const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

module.exports.init = function (folder, thePath, port) {
  app.set("port", port);

  // Middlewares initialization

  app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)


  //App compression
  app.use(compression());

  // Cors Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  app.use(helmet());
  app.use((req, res, next) => {
    res.removeHeader("X-Frame-Options");
    next();
  });
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "frame-ancestors": [
          "'self'",
          "*",
        ],
      },
    })
  );

  // Set Static Folder

  app.use(express.static(path.join(__dirname, folder)));

  app.get("/", (req, res) => {
    res.send("We are having some troubles, please come back in a while!");
  });

  //Pointing to angular app
  app.get("/*", (req, res) => {
    var fileToSend = path.join(__dirname, thePath);
    res.sendFile(fileToSend);
  });

  return app;
};
