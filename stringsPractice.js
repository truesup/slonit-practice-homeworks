// первая - первая буква будет заглавной, остальные строчными
function makeFirstLetterUppercased(str) {
  const lowerCased = str.toLowerCase();
  return lowerCased[0].toUpperCase() + lowerCased.slice(1);
}

// для второй задачи
const someString =
  'Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие. Давайте напишем аналогичный метод. На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов). На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.';

// вторая (без усложнения)
function sliceString(str, limit = 40) {
  if (str.length > limit) {
    return str.slice(0, limit) + '...';
  }

  return str;
}

// вторая (с усложнением)
function sliceStringModified(str, limit = 40) {
  if (str.length <= limit) {
    return str;
  }

  const words = str.split(' ');

  let res = '';

  for (const word of words) {
    if ((res + word).length <= limit) {
      res += word + ' ';
    } else {
      break;
    }
  }

  return res.trim() + '...';
}

// третья
function checkForInclusion(str1, str2) {
  return str1.includes(str2) || str2.includes(str1);
}
