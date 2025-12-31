'use strict';

//number.MAX_SAFE_INTEGER
//new Number();

//Array.from([0,1,3]);
//new Array();
// class Test {
//   static hello() {
//     console.log('Hello');
//   }
//   static {
//     let b = 5;
//     this.a = 5;
//   }
// }

// Test.hello();

// class Car {
// 	#vin = 6;
// 	speed;
// }
class User {
	#login;
	#_password;

	constructor(login, password) {
		this.#login = login;
		this.#password = password;
	}

	set #password(pass) {
		this.#_password = pass.split('').reverse().join('');
	}

	get #password() {
		return this.#_password.split('').reverse().join('');
	}

	get login() {
		return this.#login;
	}

	checkPassword(pass) {
		return this.#password === pass;
	}

	changePassword(oldPass, newPass) {
		if (!this.checkPassword(oldPass)) {
			return false;
		}
		this.#password = newPass;
		return true;
	}
}

const user = new User('admin', '123');
console.log(user);
console.log(user.checkPassword('asd'));

console.log('proverka');
console.log(user.checkPassword('123'));
console.log('zamena na new');
console.log(user.changePassword('123', '12341'));
console.log('test starogo');
console.log(user.checkPassword('123'));
console.log('test novogo');
console.log(user.checkPassword('12341'));

console.log(user);
