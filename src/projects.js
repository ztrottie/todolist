import Task from "./task";

class Projects {
	tasksList = [];

	constructor(title, desc, dueDate, priority) {
		this.title = title;
		this.desc = desc;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	get title() {
		return this.title;
	}

	get desc() {
		return this.desc;
	}

	get dueDate() {
		return this.dueDate;
	}

	get priority() {
		return this.priority;
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