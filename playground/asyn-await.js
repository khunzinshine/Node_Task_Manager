const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("The Number must be greater than 0!");
    }
    resolve(a + b);
  });
};

const doWork = async () => {
  const sum = await add(1, 2);
  return sum;
};

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
