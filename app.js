'use strict';

function pizzaTimer(time) {
	const end = new Date().getTime() + time;
	const interval = setInterval(() => {
		console.log(
			new Intl.DateTimeFormat('ru-RU', {
				minute: 'numeric',
				second: 'numeric',
			}).format(new Date(end + 100 - new Date())),
		);
	}, 1000);
	setTimeout(() => {
		clearInterval(interval);
		console.log('pizza ready!!!');
	}, time);
}

pizzaTimer(5000);
