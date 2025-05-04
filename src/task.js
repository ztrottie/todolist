class Task {
	subTasksList = [];

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

	set title(title) {
		this.title = title;
	}

	set desc(desc) {
		this.desc = desc;
	}

	set dueDate(dueDate) {
		this.dueDate = dueDate;
	}

	set priority(priority) {
		this.priority = priority;
	}

	addSubTask(title, desc, dueDate, priority) {
			this.subTasksList.push(new Task(title, desc, dueDate, priority));
	}

	removeTask(task) {
		if (task instanceof Task) {
			const index = this.subTasksList.indexOf(task);
			if (index !== -1) {
				this.subTasksList.splice(index, 1);
			}
		}
	}
}

export default Task;