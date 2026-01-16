'user sctrict';

// class Film {
// 	#name;
// 	#author;
// 	rating;
// 	#length;

// 	constructor(name, author, length) {
// 		this.#name = name;
// 		this.#author = author;
// 		this.#length = length;
// 	}

// 	get name() {
// 		return this.#name;
// 	}

// 	get author() {
// 		return this.#author;
// 	}

// 	get length() {
// 		return this.#length;
// 	}
// }

// const film = new Film('Avatar', 'Cameron', 240);
// console.log(film);

// const Book = function (title, author) {
// 	this.title = title;
// 	this.author = author;
// };

// Book.prototype.buy = function () {
// 	console.log('Buy');
// };

// const AudioBook = function (title, author, lenMin) {
// 	Book.call(this, title, author);
// 	this.lenMin = lenMin;
// };

// AudioBook.prototype = Object.create(Book.prototype);
// AudioBook.prototype.constructor = AudioBook;

// AudioBook.prototype.log = function () {
// 	console.log(`${this.title} - ${this.lenMin}`);
// };

// const book = new AudioBook('Test book', 'Author Andrew', 20 * 60);
// book.log();
// book.buy();
// console.log(book);

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	buy() {
		console.log('Buy');
	}
}

class AudioBook extends Book {
	constructor(title, author, lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}
	log() {
		console.log(`${this.title} - ${this.lenMin}`);
	}
}

const book = new AudioBook('kniga 1', 'author misha', 60 * 20);
book.log();
book.buy();
