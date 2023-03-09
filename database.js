const config = require("./environments/environment");
const mongoose = require("mongoose");
const myDB = config.dbAddress;

module.exports.init = function () {
  // Connect to Database
  const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 30, // Maintain up to 30 socket connections
    serverSelectionTimeoutMS: 15000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4, // Use IPv4, skip trying IPv6
  };
  mongoose.connect(myDB, options);

  // On Connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to database " + myDB);
  });

  // On Error
  mongoose.connection.on("error", (err) => {
    console.log("Database error" + err);
  });

  return mongoose;
};

module.exports.endConnect = function (connection) {
  // Connect to Database
  console.log("Ending connection");
};
