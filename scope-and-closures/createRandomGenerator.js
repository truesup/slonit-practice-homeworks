function createRandomGenerator(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

const random1to10 = createRandomGenerator(1, 10)

console.log(random1to10())
console.log(random1to10())
console.log(random1to10())

const random100to200 = createRandomGenerator(100, 200)

console.log(random100to200())
console.log(random100to200())
console.log(random100to200())
