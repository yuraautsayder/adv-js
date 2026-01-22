'use strict';
/*
const Person = function (race, name, language) {
	((this.race = race), (this.name = name), (this.language = language));
};

Person.prototype.say = function () {
	console.log(this.name, this.language);
};

const Ork = function (name, weapon) {
	Person.call(this, 'Ork', name, 'Orchiy');
	this.weapon = weapon;
};

Ork.prototype = Object.create(Person.prototype);

Ork.prototype.attack = function () {
	console.log(`${this.name} attacks with ${this.weapon}`);
};

const Elf = function (name, spell) {
	Person.call(this, 'Elf', name, 'Elfiyskiy');
	this.spell = spell;
};

Elf.prototype = Object.create(Person.prototype);

Elf.prototype.castSpell = function () {
	console.log(`${this.name} casts a ${this.spell}`);
};

Elf.prototype.createSpell = function () {
	console.log(`${this.name} creates a ${this.spell}`);
};
const ork = new Ork('Green-Ork', 'Axe');
ork.say();
ork.attack();

const elf = new Elf('White-Elf', 'AMP');
elf.say();
elf.createSpell();
elf.castSpell();
 */

class Person {
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;
	}
	say() {
		console.log(this.name, this.language);
	}
}

class Ork extends Person {
	constructor(name, weapon) {
		super('Ork', name, 'Orchiy');
		this.weapon = weapon;
	}
	attack() {
		console.log(`${this.name} attacks with ${this.weapon}`);
	}
}

class Elf extends Person {
	constructor(name, spell) {
		super('Elf', name, 'Elfiyskiy');
		this.spell = spell;
	}
	castSpell() {
		console.log(`${this.name} cast a ${this.spell}`);
	}
	createSpell() {
		console.log(`${this.name} creates a ${this.spell}`);
	}
}

const ork = new Ork('Green-ork', 'Axe');
ork.say();
ork.attack();

const elf = new Elf('Elf-huelf', 'Frost blast');
elf.say();
elf.createSpell();
elf.castSpell();
