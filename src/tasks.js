import "./idGenerator.js"

class Task {
	subTasksArray = [];
	constructor(name, description, dueDate, priority, subTasks) {
		this.id = idGenerator.newId();
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.subTasksArray = subTasks;
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

	get subTasksArray() {
		return this.subTasksArray;
	}

	set name(newName) {
		this.name = newName;
	}

	set description(newDesciption) {
		this.description = newDesciption;
	}

	set dueDate(newDueDate) {
		this.dueDate = newDueDate;
	}

	set priority(newPriority) {
		this.priority = newPriority;
	}

	addSubTask(newTask) {
		this.subTasksArray.push(newTask);
	}

	removeSubTask(index) {
		this.subTasksArray.slice(index, 1);
	}
}

export default Task