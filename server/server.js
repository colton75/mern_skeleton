import mongoose from "mongoose";

import devBundle from "./devBundle";
import config from "../config/config";
import app from "./express";

devBundle.compile(app);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s", config.port);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernSkeleton";
// MongoClient.connect(url, (err, db) => {
//   console.log("Connected succesfully to mogodb server");
//   db.close();
// });
