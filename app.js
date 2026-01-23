'use strict';

class DB {
	save(items) {
		console.log(`saved to db: ${items}`);
	}
}
class MongoDB extends DB {
	save(items) {
		console.log(`saved to MongoDB: ${items}`);
	}
}

class TodoList {
	items = [1, 2, 3];
	db;
	constructor(db) {
		this.db = db;
	}
	saveToDb() {
		this.db.save(this.items);
	}
}
const list = new TodoList(new DB());
const list2 = new TodoList(new MongoDB());
list.saveToDb();
list2.saveToDb();
