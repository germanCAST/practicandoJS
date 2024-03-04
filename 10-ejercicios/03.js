function callback(fn, ...rest) {
  return fn(...rest);
}

function log(...args) {}

callback(
  (...args) => {
    console.log(args);
  },
  1,
  2,
  3,
  4
);
