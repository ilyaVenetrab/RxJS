const sequence = new Promise((res) => {
  let count = 1;
  setInterval(() => {
    count += 1;
    res(count);
  });
});

sequence.then((v) => console.log(v));
sequence.then((v) => console.log(v));
