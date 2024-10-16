// Функция для проверки длины строки
function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}


// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  // Удаляем все пробелы и приводим строку к нижнему регистру
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  // Получаем перевёрнутую строку
  const reversedString = normalizedString.split('').reverse().join('');
  // Сравниваем нормализованную строку с перевёрнутой
  return normalizedString === reversedString;
}


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
