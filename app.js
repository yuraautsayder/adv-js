'user sctrict';
// class Book {
// 	constructor(title, author) {
// 		this.title = title;
// 		this.author = author;
// 	}
// 	buy() {
// 		console.log('Buy');
// 	}
// }

// class AudioBook extends Book {
// 	constructor(title, author, lenMin) {
// 		super(title, author);
// 		this.lenMin = lenMin;
// 	}
// 	log() {
// 		console.log(`${this.title} - ${this.lenMin}`);
// 	}
// }

// const book = new AudioBook('kniga 1', 'author misha', 60 * 20);
// book.log();
// book.buy();
class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}

	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Sword {
	#damage;
	constructor(damage) {
		this.#damage = damage;
	}
	strike(enemy) {
		enemy.recieveDamage(this.#damage);
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health);
	}

	recieveDamage(damage) {
		if (Math.random() > 0.5) {
			this.health = this.health - damage;
			console.log(this.health);
		}
	}
}

const enemy = new Enemy(10);
const sword = new Sword(3);
sword.strike(enemy);
