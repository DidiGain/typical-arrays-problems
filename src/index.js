exports.min = function min (array) {
  if (arguments.length === 0) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  return Math.min.apply(null, array);
};

exports.max = function max (array) {
  if (arguments.length === 0) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  return Math.max.apply(null, array);
};

const sum = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    count += array[i];
  }
  return count;
};

exports.avg = function avg (array) {
  if (arguments.length === 0) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  return sum(array) / array.length;
};
