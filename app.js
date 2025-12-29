'use strict';

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
