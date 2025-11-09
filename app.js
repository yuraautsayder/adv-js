'use strict';
// Сделать функцию валидации возраста. На вход передаётся строка даты рождения пользователя вида “2022-01-01”.

// Необходимо вывести true, если ему больше 14 лет и false, если меньше
//
//

function validateDate(dateString) {
	const currentDate = new Date();
	const birthDate = new Date(dateString);
	const age = currentDate - birthDate;
	return age > 14 * 365 * 24 * 60 * 60 * 1000;
}
