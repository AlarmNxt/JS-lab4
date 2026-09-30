"use strict";

// Массивы и строки.
// Запуск: node index.js

function section(title) {
  console.log(`\n--- ${title} ---`);
}

section("1. Создание массива и индексы");

const numbers = [10, 20, 30, 40];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.at(-1));
console.log(numbers.length);

section("2. Изменение элемента");

const values = [10, 20, 30];
values[1] = 99;
console.log(values);

section("3. push / pop / unshift / shift");

const basket = ["чай", "кофе"];
basket.push("молоко");
basket.unshift("вода");
console.log(basket);

console.log("Удалён с конца:", basket.pop());
console.log("Удалён с начала:", basket.shift());
console.log(basket);

section("4. splice изменяет массив");

const spliceExample = [10, 20, 30, 40, 50];
spliceExample.splice(1, 2, 99);
console.log(spliceExample);

section("5. slice возвращает новый массив");

const source = [1, 2, 3, 4, 5, 6];
const part = source.slice(2, 5);
console.log("Исходный:", source);
console.log("Часть:", part);

section("6. Перебор массива через for");

for (let i = 0; i < numbers.length; i++) {
  console.log(`Индекс ${i}: ${numbers[i]}`);
}

section("7. Перебор массива через for...of");

for (const number of numbers) {
  console.log(number);
}

section("8. Сумма элементов");

let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum);

section("9. Уникальные значения");

const repeated = [1, 2, 1, 3, 2, 4, 3];
const unique = [];

for (const value of repeated) {
  if (!unique.includes(value)) {
    unique.push(value);
  }
}

console.log(unique);

section("10. Строки и шаблонные строки");

const name = "Иван";
const greeting = `Привет, ${name}!`;
console.log(greeting);

section("11. length, индексы и at()");

let text = "hello world";
console.log(text.length);
console.log(text[0]);
console.log(text.at(-1));

section("12. Строка неизменяема");

console.log(text); // hello world
text = "H" + text.slice(1);
console.log(text); // Hello world

section("13. Регистр");

console.log(text.toUpperCase());
console.log(text.toLowerCase());

section("14. includes / indexOf / lastIndexOf");

const phrase = "Lorem ipsum dolor. Lorem ipsum.";
console.log(phrase.includes("ipsum"));
console.log(phrase.indexOf("Lorem"));
console.log(phrase.lastIndexOf("Lorem"));

section("15. startsWith / endsWith");

const site = "https://example.com/catalog";
console.log(site.startsWith("https://"));
console.log(site.endsWith("/catalog"));

section("16. slice");

console.log(text.slice(0, 5));
console.log(text.slice(6));
console.log(text.slice(-5));

section("17. split / join");

const colors = "red green blue";
const words = colors.split(" ");
console.log(words);
console.log(words.join(" | "));
console.log(words.slice().reverse().join(" "));

section("18. trim");

const dirty = "   JavaScript   ";
console.log(`[${dirty}]`);
console.log(`[${dirty.trim()}]`);

section("19. replace / replaceAll");

const repeatedText = "one one one";
console.log(repeatedText.replace("one", "two"));
console.log(repeatedText.replaceAll("one", "two"));

section("20. Ограничение текста по количеству слов");

function shortenText(text, maxWords) {
  const cleanText = text.trim();
  const words = cleanText.split(" ");

  if (words.length <= maxWords) {
    return cleanText;
  }

  const result = words.slice(0, maxWords).join(" ");
  return result.endsWith(".") ? result + ".." : result + "...";
}

console.log(shortenText("один два три четыре пять", 3));

section("21. Разбор URL строковыми методами");

function parseUrlParts(url) {
  const protocolEnd = url.indexOf("://");
  const protocol = url.slice(0, protocolEnd);
  const domainStart = protocolEnd + 3;
  const pathStart = url.indexOf("/", domainStart);
  const queryStart = url.indexOf("?", pathStart);
  const domain = url.slice(domainStart, pathStart);
  const uri = url.slice(pathStart, queryStart);
  const query = url.slice(queryStart + 1);

  return [protocol, domain, uri, query];
}

console.log(
  parseUrlParts("https://dns-shop.ru/catalog/personal/?price=20000&brand=asus")
);
