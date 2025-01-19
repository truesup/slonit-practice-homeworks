function mySlice(arr, start, end) {
  const slicedArr = [];

  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  start = Math.max(start, 0);
  end = Math.min(end, arr.length);

  for (let i = start; i < end; i++) {
    slicedArr.push(arr[i]);
  }

  return slicedArr;
}

function myIndexOf(arr, item, from = 0) {
  if (from < 0) {
    from = arr.length + from;
  }

  from = Math.max(from, 0);

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

function myIncludes(arr, item, from = 0) {
  if (from < 0) {
    from = arr.length + from;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}
