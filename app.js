'use strict';
/*
'https://dummyjson.com/products/1'
'https://dummyjson.com/products/categories'
*/
// fetch('https://dummyjson.com/products')
// 	.then((response) => response.json())
// 	.then(({ products }) => {
// 		console.log(products);
// 		return fetch('https://dummyjson.com/products/' + products[0].id);
// 	})
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => console.log(error))
// 	.finally(() => {
// 		console.log('Finally');
// 	});
//

function createSelect(array) {
	const el = document.querySelector('.filter');
	el.innerHTML = `<select>
		${array.map(arrEl => `<option value=${arrEl.name}>${arrEl.name}</option>`)}
		</select>`;
}

function getCategories() {
	fetch('https://dummyjson.com/products/categories')
		.then((response) => response.json())
		.then((data) => createSelect(data))
		.catch((error) => console.log(`Ошибка: ${error}`));
}

getCategories();
