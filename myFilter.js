function myFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(myFilter(arr, el => el % 2 !== 0));
