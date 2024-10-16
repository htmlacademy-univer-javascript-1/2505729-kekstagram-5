// Функция для проверки длины строки
function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

// Примеры использования функции
console.log(isStringLengthValid('проверяемая строка', 20)); // true
console.log(isStringLengthValid('проверяемая строка', 18)); // true
console.log(isStringLengthValid('проверяемая строка', 10)); // false



// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  // Удаляем все пробелы и приводим строку к нижнему регистру
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  // Получаем перевёрнутую строку
  const reversedString = normalizedString.split('').reverse().join('');
  // Сравниваем нормализованную строку с перевёрнутой
  return normalizedString === reversedString;
}

// Примеры использования функции
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true



// Функция для извлечения цифр из строки и преобразования их в целое положительное число
function extractNumbers(input) {
  // Преобразуем входное значение в строку
  const inputString = input.toString();

  // Создаем пустую строку для накопления цифр
  let numberString = '';

  // Перебираем каждый символ строки
  for (let char of inputString) {
    // Проверяем, является ли символ цифрой
    if (!isNaN(parseInt(char))) {
      numberString += char;
    }
  }

  // Преобразуем накопленные цифры в число
  const result = parseInt(numberString);

  // Проверяем, есть ли в строке цифры
  if (isNaN(result)) {
    return NaN;
  }

  // Возвращаем положительное целое число
  return Math.abs(result);
}

// Примеры использования функции
console.log(extractNumbers('2023 год'));            // 2023
console.log(extractNumbers('ECMAScript 2022'));     // 2022
console.log(extractNumbers('1 кефир, 0.5 батона')); // 105
console.log(extractNumbers('агент 007'));           // 7
console.log(extractNumbers('а я томат'));           // NaN

console.log(extractNumbers(2023)); // 2023
console.log(extractNumbers(-1));   // 1
console.log(extractNumbers(1.5));  // 15

