'user sctrict';

class Wallet {
	balance = 0;

	add(sum) {
		this.balance += sum;
		return this;
	}

	remove(sum) {
		this.balance -= sum;
		return this;
	}
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10);
console.log(wallet);

class Builder {
	house = {};
	addRoof() {
		this.house.roof = 'Roof';
		return this;
	}
	addFloor() {
		this.house.floor = 'Floor';
		return this;
	}
	execute() {
		return this.house;
	}
}
const res2 = new Builder().addRoof().addFloor().execute();
console.log(res2);
