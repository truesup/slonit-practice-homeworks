const user = {
  name: 'Vasya',
  friends: 5,
  likes: 19,
  projects: 7,
};

// сумма числовых полей
function getSum(obj) {
  return Object.values(obj)
    .filter(el => typeof el === 'number')
    .reduce((sum, el) => sum + el, 0);
}

// со звездочкой
function getSortedKeysArray(obj) {
  return Object.entries(obj)
    .filter(([, value]) => typeof value === 'number')
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key);
}
