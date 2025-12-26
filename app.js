'use strict';
// const Book = function(title, author) {
// 	this.title = title;
// 	this.author = author;
// 	this.isRead = false;
// }

// Book.prototype.read = function() {
// 	this.isRead = true;
// }

// const bookNameOne = new Book('Book name one', 'writer');
// bookNameOne.read()
// // console.log(bookNameOne);
// console.log(bookNameOne.__proto__);

// Цель:

//     Написать функцию конструктор и методы для работы с корзиной товаров.

// Основные пункты и задачи:

//     Определение функции конструктора Cart:
//         Создание корзины (Cart) без принимаемых аргументов.
//         Создание пустого массива товаров (products) в качестве свойства корзины.
//     Добавление метода AddProduct:
//         Функция принимает продукт и добавляет его в массив products, если такого продукта нет (проверка по идентификатору).
//     Реализация метода увеличения количества товара (increaseAmount):
//         Функция принимает идентификатор продукта и увеличивает его количество на единицу.
//     Реализация метода уменьшения количества товара (decreaseAmount):
//         Функция принимает идентификатор продукта и уменьшает его количество на единицу.
//         Продукты с количеством 0 удаляются из корзины.
// const product = { id: 1, name: 'Bread', count: 1 };

// const Cart = function () {
// 	this.products = [];
// };

// Cart.prototype.addProduct = function (product) {
// 	if (this.products.find((product) => product.id === product.id)) {
// 		return;
// 	}
// 	this.products.push(product);
// };

// Cart.prototype.increaseAmount = function (id) {
// 	this.products = this.products.map((product) => {
// 		if (product.id == id) {
// 			product.count++;
// 			return product;
// 		}
// 		return product;
// 	});
// };
// Cart.prototype.decreaseAmount = function (id) {
// 	this.products = this.products
// 		.map((product) => {
// 			if (product.id == id) {
// 				product.count--;
// 				return product;
// 			}
// 			return product;
// 		})
// 		.filter(product => product.count > 0);
// };

// const cart = new Cart();
// cart.addProduct(product);
// cart.increaseAmount(1);
// cart.decreaseAmount(1);
// cart.decreaseAmount(1);
// console.log(cart)



// maybe help
// Object.create(Person.prototype)
