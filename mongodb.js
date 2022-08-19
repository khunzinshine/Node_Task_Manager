const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = process.env.MONGODB_URL;
const databaseName = "viola-template";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect database!");
    } else {
      const db = client.db(databaseName);
      db.collection("users")
        .findOne({
          _id: new ObjectID("61339edb2276ef3069978144"),
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("Unable to find data!");
        });
    }
  }
);
