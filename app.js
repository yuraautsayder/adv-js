'use strict';


//Основные понятия:

//    Функция Конвертации: Функция для конвертации сумм из одной валюты в другую.
//    Параметры функции:
//        Сумма для конвертации.
//        Исходная валюта (Initial Currency).
//        Целевая валюта для конвертации (Convert Currency).

//Реализация:

//    Создается функция convert, принимающая три параметра: сумма, исходная валюта, целевая валюта.
//    Внутри функции используется массив объектов для представления доступных валют и их мультипликаторов к USD (базовая валюта).
//    Для неподдерживаемых валют функция возвращает null, сигнализируя об ошибке в конвертации.
//    Процесс конвертации включает в себя перевод исходной суммы в USD с помощью мультипликатора исходной валюты, затем перевод из USD в целевую валюту используя мультипликатор целевой валюты.
//    Результат конвертации форматируется в соответствии с выбранной целевой валютой и возвращается в виде строки.


function convert(sum, initialCurrency, convertCurrency) {
	const allCurencies = [
		{ name: 'USD', mult: 1 },
		{ name: 'RUB', mult: 1 / 60 },
		{ name: 'EUR', mult: 1.1 },
	];
	const initial = allCurencies.find(c => c.name === initialCurrency)
	if (!initial) {
		return null;
	}
	const convert = allCurencies.find(c => c.name === convertCurrency)
	if (!convert) {
		return null;
	}
	return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: convert.name }).format(sum * initial.mult / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD'))
console.log(convert(10000, 'RUB', 'EUR'))
console.log(convert(10000, 'RUB', 'OGO'))
