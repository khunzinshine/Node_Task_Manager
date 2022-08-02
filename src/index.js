const express = require("express");
require("./db/mongoose");
const userRoute = require("./routers/user");
const taskRoute = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check Back Soon!");
// });

app.use(express.json());
app.use(userRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("61339fab2276ef3069978146");
//   console.log(user);
// };
// main();
