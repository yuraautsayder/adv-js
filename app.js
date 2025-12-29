'use strict';

// const Book = function (title, author) {
// 	this.autor = autor;
// 	this.title = title;
// 	this.isRead = false;
// };

// Book.prototype.read = function () {
// 	this.isRead = true;
// };

class BookClass {
	isRead = false;
	constructor(title, author) {
		this.autor = author;
		this.title = title;
		this.isRead = false;
	}
	read() {
		this.isRead = true;
	}
}

const testBook = new BookClass('testovaya', 'fld');

testBook.read();
console.log(testBook);
// console.log(testBook.__proto__);
