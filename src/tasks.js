import "./idGenerator.js"

class Task {
	constructor(name, description, dueDate, priority) {
		this.id = idGenerator.newId();
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	get name() {
		return this.name
	}

	get description() {
		return this.description
	}

	get dueDate() {
		return this.dueDate
	}

	get priority() {
		return this.priority
	}


}

export default Task