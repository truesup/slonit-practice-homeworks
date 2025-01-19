const variants = [];

for (let i = 1; i <= 100; i++) {
  variants.push(i);
}

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(`Компьютер 1 загадал число ${randomNumber}\n`);

let low = variants[0];
let high = variants[variants.length - 1];
let mid;
let attempts = 0;

while (low <= high) {
  mid = Math.floor((low + high) / 2);

  console.log(`Компьютер 2: Пробую число: ${mid}`);

  attempts++;

  if (randomNumber === mid) {
    console.log(
      `Компьютер 1: Угадал! Это число: ${mid}. Колличество попыток: ${attempts}.`
    );
    break;
  } else if (randomNumber < mid) {
    high = mid - 1;
    console.log('Компьютер 1: Меньше\n');
  } else if (randomNumber > mid) {
    low = mid + 1;
    console.log('Компьютер 1: Больше\n');
  }
}
