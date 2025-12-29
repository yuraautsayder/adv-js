'use strict';

// const task = {
// 	title: 'task1',
// 	dueTo: new Date('2025/12/27'),

// 	get isOverdue() {
// 		return this.dueTo < new Date();
// 	},

// 	set isOverdue(isOverdueTask) {
// 		if (!isOverdueTask) {
// 			this.dueTo = new Date();
// 		}
// 	},
// };

// console.log(task.isOverdue);
// task.isOverdue = false;
// console.log(task);

class Task {
	constructor(title, dueDate) {
		((this.tite = title), (this.dueDate = dueDate));
	}
	get isOverdue() {
		return this.dueTo < new Date();
	}
	set dueDate(date) {
		if (date < new Date()) {
			return;
		}
		this._dueDate = date;
	}
}

const newTask = new Task('true', new Date('2021/1/1'));
// console.log((newTask.dueDate = new Date('2027/1/1')));
console.log(newTask._dueDate = new Date());
