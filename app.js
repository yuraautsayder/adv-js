'use strict';

class Weapon {
	// strike() {} don't need all weapons
	// shoot() {} too don't all other weapons
	dealDamage() {}
}

class AK extends Weapon {
	shoot() {
		this.dealDamage();
	}
}

class Sword extends Weapon {
	strike() {
		this.dealDamage();
	}
}
