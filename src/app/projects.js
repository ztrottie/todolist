import Task from "./tasks.js";

class Projects {
	tasksList = [];

	constructor() {
		this._title = "";
		this._desc = "";
		this._dueDate = "";
		this._priority = 0;
	}

	get title() {
		return this._title;
	}

	get desc() {
		return this._desc;
	}

	get dueDate() {
		return this._dueDate;
	}

	get priority() {
		return this._priority;
	}

	set title(title) {
		this._title = title;
	}

	set desc(desc) {
		this._desc = desc;
	}

	set dueDate(dueDate) {
		this._dueDate = dueDate;
	}

	set priority(priority) {
		this._priority = priority;
	}

	addSubTask(title, desc, dueDate, priority) {
		this.tasksList.push(new Task(title, desc, dueDate, priority));
	}

	removeTask(task) {
		if (task instanceof Task) {
			const index = this.tasksList.indexOf(task);
			if (index !== -1) {
				this.tasksList.splice(index, 1);
			}
		}
	}

}

export default Projects;