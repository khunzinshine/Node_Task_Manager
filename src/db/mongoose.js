const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://viola-template:c137i7V884yJOwYi@viola-template.hjt7ppv.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  }
);
