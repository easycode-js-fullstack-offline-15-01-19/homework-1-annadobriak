// -------------------------- Home work --------------------------
// --------------------------Dobriak Anna---------------------------
//------------Строки. Задачи.----------------------
//1. Получить первую и последнюю буквы строки
let string = 'some test string';
string = string[0];
string = string[string.length - 1];

//2. Сделать первую и последнюю буквы в верхнем регистре
string = string[0].toUpperCase();
string = string[string.length - 1].toUpperCase();

//3. Найти положение слова ‘string’ в строке
string = string.indexOf('string');

//4. Найти положение второго пробела (“вручную” ничего не считать)
string = string.indexOf(' ', string.indexOf(' ') + 1);

//5. Получить строку с 5-го символа длиной 4 буквы
string = string.substr(4, 4);

//6. Получить строку с 5-го по 9-й символы
string = string.slice(4, 9);

//7. Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)
string = string.slice(0, -6);

//8. Из двух переменных a=20 и b=16 получить переменную string,
// в которой будет содержаться текст “2016”
let a = '20';
let b = '16';
string = a + b;

//-----------------Числа. Задачи.--------------
//1. Получить число pi из Math и округлить его до 2-х знаков после точки
string = Math.PI.toFixed(2);

//2. Используя Math, найти максимальное и минимальное числа из 
//представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
string = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
string = Math.min(15, 11, 16, 12, 51, 12, 13, 51);


//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
string = Math.random().toFixed(2);

//b. Получить случайное целое число от 0 до X. X - любое произвольное число.
string = Math.ceil(Math.random() * 27);

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let result = 0.6 + 0.7;
string = result.toFixed(1);


//5. Получить число из строки ‘100$’
string = parseFloat('100$');

//----------Объекты. Задачи.---------------
//1. Создать объект с полем product, равным ‘iphone’
let phone = {
	product: 'iphone'
};

//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
phone.price = '1000';
phone.currency = 'dollar';

//3. Добавить поле details, которое будет содержать объект с полями model и color
phone.details = obj = {
		model: 'X',
		color: 'white'
	};