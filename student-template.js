"use strict";

// Практическая работа №4
// Тема: массивы и строки.
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте.

// 1. Сумма элементов массива
// Вернуть сумму всех чисел массива numbers.
// Гарантируется, что массив не пуст и содержит только числа.
function sumArray(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num; 
  }
  return sum;
}

// 2. Уникальные значения
// Вернуть новый массив без повторяющихся значений.
// Порядок первого появления элементов нужно сохранить.
// Не изменяйте исходный массив.
function uniqueValues(values) {
  const result = [];

  for (let val of values) {
    if (!result.includes(val)) {
      result.push(val);
    }
  }
  return result;
}

// 3. Минимум и максимум
// Вернуть массив [min, max].
// Гарантируется, что numbers содержит хотя бы одно число.
// Math.min() и Math.max() в этой задаче не используйте.
function minMax(numbers) {
  // TODO
}

// 4. Сокращение текста
// Если слов больше maxWords, оставить первые maxWords слов и добавить многоточие.
// Если получившийся фрагмент уже заканчивается точкой, добавить только две точки.
// Если слов не больше maxWords — вернуть текст без изменений по смыслу, но без пробелов по краям.
// В условии гарантируется, что слова разделены одним пробелом.
function shortenText(text, maxWords) {
  // TODO
}

// 5. Поменять две части строки местами
// Строка состоит ровно из двух непустых частей, разделённых одним пробелом.
// Пример: swapParts("hello world") -> "world hello"
function swapParts(text) {
  // TODO
}

// 6. Разбор URL без объекта URL
// Вернуть массив [protocol, domain, uri, query].
// Входная строка содержит протокол, домен, путь и query-параметры.
// Пример:
// parseUrlParts("https://site.ru/catalog/?id=5")
// -> ["https", "site.ru", "/catalog/", "id=5"]
function parseUrlParts(url) {
  // TODO
}

module.exports = {
  sumArray,
  uniqueValues,
  minMax,
  shortenText,
  swapParts,
  parseUrlParts,
};
