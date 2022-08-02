require("../src/db/mongoose");
const Task = require("../src/models/task");
const User = require("../src/models/user");

// Task.findByIdAndDelete("600db30b91082810b1d44335")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const doUpdate = async (_id, age) => {
//   await User.findByIdAndUpdate(_id, age);
//   const count = await User.countDocuments({ age: age });
//   return count;
// };
// doUpdate("600da1e3af0e92017347375d", 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const doDelete = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

doDelete("600dadcd7a42490adfed6781")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
