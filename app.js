'use strict';
/*
Спроектируйте класс Billing со свойством amount и методом calculateTotal для расчёта счёта. Сделайте разный calculateTotal для разных типов:

fixBilling - где нужно вернуть amount как результат
hourBilling - который считает amount * число часов
itemBilling где считается amount * число элементов
Соблюдайте принцип открытости / закрытости!
*/

class Billing {
	constructor(amount) {
		this.amount = amount;
	}
	calculateTotal() {
		throw new Error('mthod calculateTotal must be implemented');
	}
}

class FixBilling extends Billing {
	calculateTotal() {
		return this.amount;
	}
}

class HourBilling extends Billing {
	constructor(amount, hour) {
		super(amount);
		this.hour = hour;
	}
	calculateTotal() {
		return this.amount * this.hour;
	}
}

class ItemBilling extends Billing {
	constructor(amount, itemCount) {
		super(amount);
		this.itemCount = itemCount;
	}
	calculateTotal() {
		return this.amount * this.itemCount;
	}
}

const billings = [
	new FixBilling(1000),
	new HourBilling(50, 8),
	new ItemBilling(200, 5),
];

billings.forEach((billing) => {
	console.log(billing.calculateTotal());
});
